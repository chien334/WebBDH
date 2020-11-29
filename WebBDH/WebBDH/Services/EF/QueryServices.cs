using BDH.Data;
using BDH.Data.EFService;
using BDH.Models;
using BDH.Models.Queries;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Helpers;
using WebBDH.Models;
using WebBDH.Models.ModelView;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;
using WebBDH.Responsitories;

namespace BDH.Services.EF
{
    public partial class QueryServices : IQueryServices
    {
        BDHContext dbContext;
        private readonly AppSettings _appSettings;

        public QueryServices(BDHContext dbContext, IOptions<AppSettings> appSettings)
        {
            this.dbContext = dbContext;
            _appSettings = appSettings.Value;
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
               .Where(e => (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
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
        public async Task<IPagedList<BrandView>> LoadListBrand(QueryModel<BrandQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<Brand>()
               .AsNoTracking()
               .Where(e => (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
               )
               .Select(x => new BrandView(x)).PageResultAsync(model.Page, model.PageSize, cancellation);
        }
        public async Task<IPagedList<LoaiDayView>> LoadListLoaiDay(QueryModel<LoaiDayQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<LoaiDay>()
              .AsNoTracking()
              .Where(e => (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
               (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
              )
              .Select(x => new LoaiDayView(x)).PageResultAsync(model.Page, model.PageSize, cancellation);
        }
        public async Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<Product>()
                //.Join(dbContext.MatDongHo, p=>p.IdMatDh, m=>m.Id , (p,m)=> new { p,m})
                .AsNoTracking()
                .Where(e =>
                (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (model.Entity.Color == default || e.Color.Contains(model.Entity.Color)) &&
                (model.Entity.Description == default || e.Description.Contains(model.Entity.Description)) &&
                (model.Entity.IdBrand == default || e.IdBrand.Equals(model.Entity.IdBrand)) &&
                (model.Entity.FromPrice == default || e.Price >= model.Entity.FromPrice) &&
                (model.Entity.ToPrice == default || e.Price <= model.Entity.ToPrice) &&
                (model.Entity.FromWeight == default || e.Weight >= model.Entity.FromWeight) &&
                (model.Entity.ToWeight == default || e.Weight >= model.Entity.ToWeight) &&
                (model.Entity.Sex == default || e.Sex == model.Entity.Sex) &&
                (model.Entity.IdLoaiDay == default || e.IdLoaiDay.Equals(model.Entity.IdLoaiDay)) &&
                (model.Entity.IdMatDh == default || e.Sex == e.IdMatDh.Equals(model.Entity.IdMatDh))
                )
                .Select(x => new ProductView(x))
                .PageResultAsync(model.Page, model.PageSize, cancellation);
        }
        public async Task<IPagedList<ProductModel>> LoadProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<ProductModel>()
                .AsNoTracking()
                .Where(e =>
                (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (model.Entity.Color == default || e.Color.Contains(model.Entity.Color)) &&
                (model.Entity.Description == default || e.Description.Contains(model.Entity.Description)) &&
                (model.Entity.Brand == default || e.Brand.Contains(model.Entity.Brand)) &&
                (model.Entity.FromPrice == default || e.Price >= model.Entity.FromPrice) &&
                (model.Entity.ToPrice == default || e.Price <= model.Entity.ToPrice) &&
                (model.Entity.FromWeight == default || e.Weight >= model.Entity.FromWeight) &&
                (model.Entity.ToWeight == default || e.Weight >= model.Entity.ToWeight) &&
                (model.Entity.Sex == default || e.Sex == model.Entity.Sex) &&
                (model.Entity.LoaiDay == default || e.LoaiDay.Contains(model.Entity.LoaiDay)) &&
                (model.Entity.MatDongHo == default || e.Sex == e.MatDongHo.Contains(model.Entity.MatDongHo))
                )
                .Select(x => new ProductModel() { 
                    Name=x.Name,
                    Color= x.Color,
                    Description= x.Description,
                    Brand=x.Brand,
                    Price=x.Price,
                    Weight= x.Weight,
                    Sex=x.Sex,
                    LoaiDay=x.LoaiDay,
                    MatDongHo=x.MatDongHo,
                    Path=x.Path
                })
                .PageResultAsync(model.Page, model.PageSize, cancellation);
        }
    }
}