using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class Cart
    {
        public Cart()
        {
            CartItem = new HashSet<CartItem>();
        }

        public long Id { get; set; }
        public long? UserId { get; set; }
        public string SessionId { get; set; }
        public string Token { get; set; }
        public short? Status { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual UserAccount User { get; set; }
        public virtual ICollection<CartItem> CartItem { get; set; }
    }
}
