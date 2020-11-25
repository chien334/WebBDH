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
    public partial class AccountController
    {
       
        [HttpPost]
        public async Task<IActionResult> Login(QueryModel<AccountQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.Authenticate(query.Entity.Email,query.Entity.Password);
            if (data == null) return BadRequest(new { message="UserName or Password is incorrect" });
            return new JsonResult(new
            {
                Items = data
            }) ;
        }

    }
}
