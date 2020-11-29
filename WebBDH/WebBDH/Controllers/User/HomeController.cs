using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Services;
using Microsoft.AspNetCore.Mvc;
using WebBDH.Models.Queries;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.User
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private IQueryServices _service;

        public HomeController(IQueryServices service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<JsonResult> LoadProducts(QueryModel<ProductQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.LoadProduct(query, cancelllationToken);
            return new JsonResult( new
            {
                Items=data.ToArray(),
                Success= data.Count()>0?true:false,
                ToTalCount= data.TotalCount
            });
        }

    }
}
