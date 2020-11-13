﻿using BDH.Data;
using BDH.Data.EFService;
using BDH.Models;
using BDH.Models.Queries;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Models;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;
using WebBDH.Responsitories;

namespace BDH.Services.EF
{
    public partial class QueryServices : IQueryServices
    {
        BDHContext dbContext;

        public QueryServices(BDHContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public virtual async Task AddAsync<T>(T entity, CancellationToken cancellationToken) where T : class
        {
            await dbContext.Set<T>().AddAsync(entity, cancellationToken);
            return;
        }

        public virtual async Task AddAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class
        {
            await dbContext.Set<T>().AddRangeAsync(entity, cancellationToken);
            return;
        }

        public virtual Task DeleteAsync<T>(T entity, CancellationToken cancellationToken) where T : class
        {
            dbContext.Set<T>().Remove(entity);
            return Task.CompletedTask;
        }

        public virtual Task DeleteAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class
        {
            dbContext.Set<T>().RemoveRange(entity);
            return Task.CompletedTask;
        }

        public async Task<int> SaveAsync(CancellationToken cancellationToken = default)
        {
            var affecterRecords = await dbContext.SaveChangesAsync(cancellationToken);
            return affecterRecords;
        }

        public virtual Task UpdateAsync<T>(T entity, CancellationToken cancellationToken) where T : class
        {
            dbContext.Update(entity);
            return Task.CompletedTask;
        }

        public virtual Task UpdateAsync<T>(IEnumerable<T> entity, CancellationToken cancellationToken) where T : class
        {
            dbContext.UpdateRange(entity);
            return Task.CompletedTask;
        }
        public async Task<List<ProductView>> LoadAllProduct(CancellationToken cancellation = default)
        {
            return await dbContext.Set<Product>()
               .AsNoTracking()
               .Select(x => new ProductView(x)).ToListAsync();
        }

        public async Task<IPagedList<MatDongHoView>> LoadListMatDH(QueryModel<MatDongHoQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<MatDongHo>()
               .AsNoTracking()
               .Where(e =>(model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
               )
               .Select(x => new MatDongHoView(x)).PageResultAsync(model.Page, model.PageSize, cancellation);
        }

        public async Task<IPagedList<ImageView>> LoadListImage(QueryModel<ImageQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<Image>()
               .AsNoTracking()
               .Where(e => (model.Entity.Path == default || e.Path.Contains(model.Entity.Path)) &&
                (model.Entity.IdProduct == default)
               )
               .Select(x => new ImageView(x)).PageResultAsync(model.Page, model.PageSize, cancellation);
        }
        public async Task<IPagedList<AccountView>> LoadListAccount(QueryModel<AccountQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<AccountAdmin>()
               .AsNoTracking()
               .Where(e => (model.Entity.UserName == default || e.UserName.Contains(model.Entity.UserName)) &&
                (model.Entity.FirstName == default || e.FirstName.Contains(model.Entity.FirstName)) &&
                (model.Entity.LastName == default || e.LastName.Contains(model.Entity.LastName)) &&
                (model.Entity.Email == default || e.Email.Contains(model.Entity.Email)) &&
                (model.Entity.Phone == default || e.Phone.Contains(model.Entity.Phone))
               )
               .Select(x => new AccountView(x)).PageResultAsync(model.Page, model.PageSize, cancellation);
        }

        public async Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<Product>()
                //.Join(dbContext.MatDongHo, p=>p.IdMatDh, m=>m.Id , (p,m)=> new { p,m})
                .AsNoTracking()
                .Where(e =>
                (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (model.Entity.Color == default || e.Color.Contains(model.Entity.Color))&&
                (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))&&
                (model.Entity.IdBrand == default || e.IdBrand.Equals(model.Entity.IdBrand)) &&
                (model.Entity.FromPrice == default || e.Price >=model.Entity.FromPrice)&&
                (model.Entity.ToPrice == default || e.Price <=model.Entity.ToPrice) &&
                (model.Entity.FromWeight == default || e.Weight >= model.Entity.FromWeight) &&
                (model.Entity.ToWeight == default || e.Weight >= model.Entity.ToWeight)&&
                (model.Entity.Sex == default || e.Sex == model.Entity.Sex) &&
                (model.Entity.IdLoaiDay == default || e.IdLoaiDay.Equals(model.Entity.IdLoaiDay)) &&
                (model.Entity.IdMatDh == default || e.Sex == e.IdMatDh.Equals(model.Entity.IdMatDh))
                )
                .Select(x => new ProductView(x))
                .PageResultAsync(model.Page,model.PageSize,cancellation);
        }
    }
}
