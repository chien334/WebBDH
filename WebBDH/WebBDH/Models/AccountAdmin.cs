using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class AccountAdmin
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool? Sex { get; set; }
        public string Phone { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }
        public bool Deleted { get; set; }
    }
}
