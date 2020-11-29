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
        [Obsolete]
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
        {
            modelBuilder.Query<ProductModel>().ToView("v_Product");
        }

    }

}
