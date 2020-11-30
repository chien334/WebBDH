using BDH.Data;
using BDH.Data.EFService;
using BDH.Models;
using BDH.Models.Queries;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Helpers;
using WebBDH.Models;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;
using WebBDH.Responsitories;

namespace BDH.Services.EF
{
    public partial class QueryServices
    {
        public async Task<MatDongHoView> SearchModel(QueryModel<MatDongHoQuery> model, CancellationToken cancellationToken)
        {
            return await dbContext.Set<MatDongHo>()
             .AsNoTracking()
             .Where(e =>
             (model.Entity.Id == default || e.Id == model.Entity.Id) &&
             (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
              (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
             )
             .Select(x => new MatDongHoView(x))
             .FirstOrDefaultAsync();
        }
        public async Task<LoaiDayView> SearchModel(QueryModel<LoaiDayQuery> model, CancellationToken cancellationToken)
        {
            return await dbContext.Set<LoaiDay>()
              .AsNoTracking()
              .Where(e =>
                      (model.Entity.Id == default || e.Id == model.Entity.Id) &&
                      (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
                      (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
               )
              .Select(x => new LoaiDayView(x))
              .FirstOrDefaultAsync();
        }
        public async Task<BrandView> SearchModel(QueryModel<BrandQuery> model, CancellationToken cancellationToken)
        {
            return await dbContext.Set<Brand>()
              .AsNoTracking()
              .Where(e => 
              (model.Entity.Id==default||e.Id==model.Entity.Id)&&
              (model.Entity.Name == default || e.Name.Contains(model.Entity.Name)) &&
               (model.Entity.Description == default || e.Description.Contains(model.Entity.Description))
              )
              .Select(x=> new BrandView(x))
              .FirstOrDefaultAsync();
        }
    }
}
