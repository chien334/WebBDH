using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Models.Views;
using BDH.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.Admin
{
    [Route("/admin/api/[controller]/[action]")]
    [ApiController]
    public class LoaiDayController : ControllerBase
    {
        private IService _service;

        public LoaiDayController(IService service)
        {
            _service = service;
        }
        // GET: api/<LoaiDayController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoaiDayController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task<JsonResult> LoadLoaiDay(QueryModel<LoaiDayQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.LoadListLoaiDay(query, cancelllationToken);
            return new JsonResult(new
            {
                Items = data.ToArray(),
                ToTalCount = data.TotalCount
            });
        }

        // PUT api/<LoaiDayController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoaiDayController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
