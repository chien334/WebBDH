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
    public class LoaiDaysController : ControllerBase
    {
        private IQueryServices _service;

        public LoaiDaysController(IQueryServices queryService)
        {
            _service = queryService;
        }

        [HttpPost]
        public async Task<JsonResult> Search(QueryModel<LoaiDayQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.LoadListLoaiDay(query, cancelllationToken);
            return new JsonResult(new
            {
                Success=data.Count()>0?true:false,
                Items = data.ToArray(),
                ToTalCount = data.TotalCount
            });
        }
        [HttpPost]
        public async Task<JsonResult> SearchModel(QueryModel<LoaiDayQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.SearchModel(query, cancelllationToken);
            return new JsonResult(new
            {
                Success = data!=null ? true : false,
                Items = data
            });
        }

        [HttpPost]
        public async Task<JsonResult> Create(CreateModel<LoaiDay> query, CancellationToken cancelllationToken)
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
        public async Task<JsonResult> Update(UpdateModel<LoaiDay> query, CancellationToken cancelllationToken)
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
        public async Task<JsonResult> Delete(CreateModel<LoaiDay> query, CancellationToken cancelllationToken)
        {
            await _service.DeleteAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }


        private void SetUpdate(UpdateModel<LoaiDay> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
        } 
        private void SetAddNew(CreateModel<LoaiDay> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
            query.Entity.CreateBy = "admin";
            query.Entity.CreateTime = DateTime.Now;
        }

    }
}
