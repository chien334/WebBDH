using BDH.Data;
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
    public  partial interface IQueryServices
    {
        Task AddAsync<T>(T entity, CancellationToken cancellationToken) where T : class;
        Task AddAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class;
        Task UpdateAsync<T>(T entity, CancellationToken cancellationToken) where T : class;
        Task UpdateAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class;
        Task DeleteAsync<T>(T entity, CancellationToken cancellationToken) where T : class;
        Task DeleteAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class;
        Task<int> SaveAsync(CancellationToken cancellationToken = default);
        Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<MatDongHoView>> LoadListMatDH(QueryModel<MatDongHoQuery> model, CancellationToken cancellation = default);
        Task<List<ProductView>> LoadAllProduct(CancellationToken cancellation = default);
    }
}
