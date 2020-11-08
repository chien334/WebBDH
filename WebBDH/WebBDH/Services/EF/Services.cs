using BDH.Models;
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
    public partial class Services : IService
    {
        BDHContext dbContext = new BDHContext();
        public async Task<IPagedList<ProductView>> LoadListProduct(QueryModel<ProductQuery> model, CancellationToken cancellation = default)
        {
            return await dbContext.Set<Product>()
                .AsNoTracking()
                .Where(e => (e.Id == default || e.Id.Equals(model.Entity.Id)) &&
                (e.Name == default || e.Name.Contains(model.Entity.Name)) &&
                (e.Color == default || e.Color.Contains(model.Entity.Color)))
                .Select(x => new ProductView(x))
                .PageResultAsync(model.Page,model.PageSize,cancellation);
        }
    }
}
