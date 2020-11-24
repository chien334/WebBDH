using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class UserAccount
    {
        public UserAccount()
        {
            Cart = new HashSet<Cart>();
            UserOrder = new HashSet<UserOrder>();
        }

        public long Id { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? Sex { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime? RegistedAt { get; set; }
        public DateTime? LastLogin { get; set; }
        public bool? Deleted { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<UserOrder> UserOrder { get; set; }
    }
}
