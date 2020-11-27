using System;
using BDH.Metadata;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebBDH.Models;
using WebBDH.Models.ModelView;

namespace WebBDH.Responsitories
{
    public partial class BDHContext
    {
       public DbSet<ProductModel> ProductModels { get; set; }
        protected virtual void ApplyConfiguration(ModelBuilder modelBuilder, IDbDescription description)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration(description));
        }
        public partial class ProductConfiguration : IEntityTypeConfiguration<ProductModel>
        {
            private readonly IDbDescription _dbDescription;
            public ProductConfiguration(IDbDescription dbDescription)
            {
                _dbDescription = dbDescription;
            }
            public void Configure(EntityTypeBuilder<ProductModel> builder)
            {
                builder.HasNoKey()
                     .ToView("v_Product");
            }
        }

    }

}
