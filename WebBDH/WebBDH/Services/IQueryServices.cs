﻿using BDH.Data;
using BDH.Models;
using BDH.Models.Queries;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Models;
using WebBDH.Models.ModelView;
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
        Task<long> LastIdOrderAsync(CancellationToken cancellationToken = default);
        Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<ProductModel>> LoadProduct(QueryModel<ProductViewQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<MatDongHoView>> LoadListMatDH(QueryModel<MatDongHoQuery> model, CancellationToken cancellation = default);
        Task<List<ProductView>> LoadAllProduct(CancellationToken cancellation = default);
        Task<IPagedList<ImageView>> LoadListImage(QueryModel<ImageQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<AccountView>> LoadListAccount(QueryModel<AccountQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<BrandView>> LoadListBrand(QueryModel<BrandQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<LoaiDayView>> LoadListLoaiDay(QueryModel<LoaiDayQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<CartItem>> LoadCart(QueryModel<CartQuery> model, CancellationToken cancellation = default);
        Task<CartItem> CheckCartItem(long productid, long cartid);
        Task DeleteCartItem(long cartitemid);
        Task<IPagedList<UserOrderView>> SearchUserOrder(QueryModel<UserOrderQuery> model, CancellationToken cancellation = default);
        Task<IPagedList<OrderListDetail>> SearchItemOrder(QueryModel<OrderListDetail> model, CancellationToken cancellation = default);
    }
}
