using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class UserOrder
    {
        public UserOrder()
        {
            OrderItem = new HashSet<OrderItem>();
        }

        public long Id { get; set; }
        public long? UserId { get; set; }
        public string SessionId { get; set; }
        public string Token { get; set; }
        public short? Status { get; set; }
        public double? ItemDiscount { get; set; }
        public double? Tax { get; set; }
        public double? Shipping { get; set; }
        public double? Total { get; set; }
        public double? Discount { get; set; }
        public double? GrandTotal { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Content { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual UserAccount User { get; set; }
        public virtual ICollection<OrderItem> OrderItem { get; set; }
    }
}
