using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBDH.Models.ModelView
{
    public partial class OrderDetail
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Content { get; set; }
        public List<CartItem> cartitems { get; set; }
    }
}
