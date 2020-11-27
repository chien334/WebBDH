using System;
using System.Collections.Generic;

namespace WebBDH.Models.Queries
{
    public partial class ProductQuery
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? IdLoaiDay { get; set; }
        public long? IdMatDh { get; set; }
        public string Description { get; set; }
        public double? FromPrice { get; set; }
        public double? ToPrice { get; set; }
        public string Color { get; set; }
        public double? FromWeight { get; set; }
        public double? ToWeight { get; set; }
        public bool? Sex { get; set; }
        public long? IdBrand { get; set; }
    }
}
