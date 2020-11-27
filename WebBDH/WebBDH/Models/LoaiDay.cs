using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class LoaiDay
    {
        public LoaiDay()
        {
            Product = new HashSet<Product>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual ICollection<Product> Product { get; set; }
    }
}
