using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBDH.Models.Views
{
    public class DetailProductView
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
        public List<ImageView> image { get; set; }
        public DetailProductView() { }
    }
}
