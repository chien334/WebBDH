﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Models.Queries;
using BDH.Services;
using Microsoft.AspNetCore.Mvc;
using WebBDH.Models;
using WebBDH.Models.ModelView;
using WebBDH.Models.Queries;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.Admin
{
    [Route("/admin/api/[controller]/[action]")]
    [ApiController]
    public class UserOrderController : ControllerBase
    {
        private IQueryServices _service;

        public UserOrderController(IQueryServices queryService)
        {
            _service = queryService;
        }

        [HttpPost]
        public async Task<JsonResult> Search(QueryModel<UserOrderQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.SearchUserOrder(query, cancelllationToken);
            return new JsonResult(new
            {
                Success=data.Count()>0?true:false,
                Items = data.ToArray(),
                ToTalCount = data.TotalCount
            });
        }
        [HttpPost]
        public async Task<JsonResult> SearchDetail(QueryModel<OrderListDetail> query, CancellationToken cancelllationToken)
        {
            var data = await _service.SearchItemOrder(query, cancelllationToken);
            return new JsonResult(new
            {
                Success = data.Count() > 0 ? true : false,
                Items = data.ToArray(),
                ToTalCount = data.TotalCount
            });
        }
        //[HttpPost]
        //public async Task<JsonResult> SearchModel(QueryModel<BrandQuery> query, CancellationToken cancelllationToken)
        //{
        //    var data = await _service.SearchModel(query, cancelllationToken);
        //    return new JsonResult(new
        //    {
        //        Success = data != null ? true : false,
        //        Items = data
        //    });
        //}

        //[HttpPost]
        //public async Task<JsonResult> Create(CreateModel<Brand> query, CancellationToken cancelllationToken)
        //{
        //    SetAddNew(query);
        //    await _service.AddAsync(query.Entity,cancelllationToken);
        //    var count = await _service.SaveAsync(cancelllationToken);
        //    return new JsonResult(new
        //    {
        //        Success = count > 0,
        //        Entity = query.Entity
        //    });
        //}
        //[HttpPost]
        //public async Task<JsonResult> Update(UpdateModel<Brand> query, CancellationToken cancelllationToken)
        //{
        //    SetUpdate(query);
        //    await _service.UpdateAsync(query.Entity, cancelllationToken);
        //    var count = await _service.SaveAsync(cancelllationToken);
        //    return new JsonResult(new
        //    {
        //        Success = count > 0,
        //        Entity = query.Entity
        //    });
        //}
        //[HttpPost]
        //public async Task<JsonResult> Delete(CreateModel<Brand> query, CancellationToken cancelllationToken)
        //{
        //    await _service.DeleteAsync(query.Entity, cancelllationToken);
        //    var count = await _service.SaveAsync(cancelllationToken);
        //    return new JsonResult(new
        //    {
        //        Success = count > 0,
        //        Entity = query.Entity
        //    });
        //}


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
