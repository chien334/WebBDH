using BDH.Models;
using BDH.Models.Views;
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
        Task<IPagedList<MatDongHoView>> LoadListMatDH(QueryModel<MatDongHoQuery> model, CancellationToken cancellation = default);
        Task<List<ProductView>> LoadAllProduct(CancellationToken cancellation = default);
        Task<IPagedList<AccountView>> LoadListAccount(QueryModel<AccountQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<ImageView>> LoadImage(QueryModel<ImageQuery> model, CancellationToken cancellation = default);
    }
}
