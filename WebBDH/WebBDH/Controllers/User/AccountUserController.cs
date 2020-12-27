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
using WebBDH.Models.Queries;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBDH.Controllers.User
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountUserController : ControllerBase
    {
        private IQueryServices _service;

        public AccountUserController(IQueryServices service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginQuery query, CancellationToken cancelllationToken)
        {
            var data = await _service.AuthenticateUser(query.UserName, query.Password);
            if (data == null) return BadRequest(new { message = "UserName or Password is incorrect" });
            return new JsonResult(new
            {
                Items = data
            });
        }
        [HttpPost]
        public async Task<IActionResult> Register(CreateModel<UserAccount> query, CancellationToken cancelllationToken)
        {
            {
                SetAddNew(query);
                var check = await _service.CheckAccountExist(query.Entity.UserName);
                if (check)
                {
                    await _service.AddAsync(query.Entity, cancelllationToken);
                }
                await _service.AddAsync(query.Entity, cancelllationToken);
                var count = await _service.SaveAsync(cancelllationToken);
                return new JsonResult(new
                {
                    Success = count > 0,
                    Entity = query.Entity
                });
            }
        }
        private void SetAddNew(CreateModel<UserAccount> query)
        {
            query.Entity.LastUpdateBy = "admin";
            query.Entity.LastUpdateTime = DateTime.Now;
            query.Entity.CreateBy = "admin";
            query.Entity.CreateTime = DateTime.Now;
        }

    }
}
