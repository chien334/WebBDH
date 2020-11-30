using BDH.Data;
using BDH.Models;
using BDH.Models.Queries;
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
    public partial interface IQueryServices
    {
        Task<MatDongHoView> SearchModel(QueryModel<MatDongHoQuery> query,CancellationToken cancellationToken);
        Task<LoaiDayView> SearchModel(QueryModel<LoaiDayQuery> query, CancellationToken cancellationToken);
        Task<BrandView> SearchModel(QueryModel<BrandQuery> query, CancellationToken cancellationToken);
        Task<DetailProductView> SearchModel(QueryModel<ProductQuery> query, CancellationToken cancellationToken);
    }
}