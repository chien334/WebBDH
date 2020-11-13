using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Services;
using Microsoft.AspNetCore.Mvc;
using WebBDH.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.Admin
{
    [Route("/admin/api/[controller]/[action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IQueryServices _service;

        public ProductsController(IQueryServices queryService)
        {
            _service = queryService;
        }
        [HttpPost]
        public async Task<JsonResult> Create(CreateModel<Product> query, CancellationToken cancelllationToken)
        {
            SetAddNew(query);
            await _service.AddAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        [HttpPost]
        public async Task<JsonResult> Update(UpdateModel<Product> query, CancellationToken cancelllationToken)
        {
            SetUpdate(query);
            await _service.UpdateAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        [HttpPost]
        public async Task<JsonResult> Delete(CreateModel<Product> query, CancellationToken cancelllationToken)
        {
            await _service.DeleteAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        //[HttpPost]
        //public async Task<JsonResult> MarkDelete(CreateModel<Product> query, CancellationToken cancelllationToken)
        //{
        //    query.Entity.Deleted = true;
        //    await _service.UpdateAsync(query.Entity, cancelllationToken);
        //    var count = await _service.SaveAsync(cancelllationToken);
        //    return new JsonResult(new
        //    {
        //        Success = count > 0,
        //        Entity = query.Entity
        //    });
        //}

        private void SetUpdate(CreateModel<Product> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
        }
        private void SetAddNew(CreateModel<Product> query)
        {
            SetUpdate(query);
            query.Entity.CreateBy = "admin";
            query.Entity.CreateTime = DateTime.Now;
        }
    }
}
