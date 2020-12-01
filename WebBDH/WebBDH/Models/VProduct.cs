using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class VProduct
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string IdLoaiDay { get; set; }
        public string IdMatDh { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public string Color { get; set; }
        public double? Weight { get; set; }
        public bool? Sex { get; set; }
        public string IdBrand { get; set; }
        public string Path { get; set; }
    }
}
