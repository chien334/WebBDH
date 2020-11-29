using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBDH.Models.ModelView
{
    public partial class ProductModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string LoaiDay { get; set; }
        public string MatDongHo { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public string Color { get; set; }
        public double? Weight { get; set; }
        public bool? Sex { get; set; }
        public string Brand { get; set; }
        public string Path { get; set; }
        
        public ProductModel()
        {
        }
    }
}
