using BDH.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Models;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;

namespace BDH.Services
{
    public  partial interface IService
    {
        Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default);
    }
}
