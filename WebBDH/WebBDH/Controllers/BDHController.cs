using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBDH.Controllers
{
    [ApiController]
    public class BDHController :ControllerBase
    {
        //protected string UserName = this.User?.Identity?.Name;
        protected Microsoft.Net.Http.Headers.MediaTypeHeaderValue XlsxMediaType
            => new Microsoft.Net.Http.Headers.MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.speadsheetml.sheet");
        protected void SetUpdateAttributes()
        {

        }
    }
}
