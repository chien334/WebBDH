using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class AccountUserView
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Phone { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public AccountUserView() { }
    }
}
