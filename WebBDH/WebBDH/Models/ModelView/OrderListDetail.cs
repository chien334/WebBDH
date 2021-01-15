using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBDH.Models.ModelView
{
    public partial class OrderListDetail
    {
        public long Id { get; set; }
        public long OrderId { get; set; }
        public string Name { get; set; }
        public double? Price { get; set; }
        public short? Quantity { get; set; }
        public string FirstName { get; set; }
        public OrderListDetail() { }

    }
}
