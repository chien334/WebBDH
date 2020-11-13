using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Models.Queries;
using BDH.Services;
using Microsoft.AspNetCore.Mvc;
using WebBDH.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.Admin
{
    [Route("/admin/api/[controller]/[action]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private IQueryServices _service;

        public BrandController(IQueryServices queryService)
        {
            _service = queryService;
        }

        [HttpPost]
        public async Task<JsonResult> Search(QueryModel<BrandQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.LoadListBrand(query, cancelllationToken);
            return new JsonResult(new
            {
                Items = data.ToArray(),
                ToTalCount = data.TotalCount
            });
        }

        [HttpPost]
        public async Task<JsonResult> Create(CreateModel<Brand> query, CancellationToken cancelllationToken)
        {
            SetAddNew(query);
            await _service.AddAsync(query.Entity,cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        [HttpPost]
        public async Task<JsonResult> Update(UpdateModel<Brand> query, CancellationToken cancelllationToken)
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
        public async Task<JsonResult> Delete(CreateModel<Brand> query, CancellationToken cancelllationToken)
        {
            await _service.DeleteAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }


        private void SetUpdate(UpdateModel<Brand> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
        } 
        private void SetAddNew(CreateModel<Brand> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
            query.Entity.CreateBy = "admin";
            query.Entity.CreateTime = DateTime.Now;
        }

    }
}
