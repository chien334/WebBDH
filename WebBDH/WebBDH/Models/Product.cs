using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? IdLoaiDay { get; set; }
        public long? IdMatDh { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public string Color { get; set; }
        public double? Weight { get; set; }
        public bool? Sex { get; set; }
        public long IdBrand { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual Brand IdBrandNavigation { get; set; }
        public virtual LoaiDay IdLoaiDayNavigation { get; set; }
        public virtual MatDongHo IdMatDhNavigation { get; set; }
    }
}
