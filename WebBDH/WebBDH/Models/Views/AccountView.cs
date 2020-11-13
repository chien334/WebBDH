using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class AccountView
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public AccountView() { }
        public AccountView(AccountAdmin e)
        {
            Id = e.Id;
            UserName = e.UserName;
            FirstName = e.FirstName;
            LastName = e.LastName;
            Phone = e.Phone;
            Email = e.Email;
            Password = e.Password;
        }
    }
}
