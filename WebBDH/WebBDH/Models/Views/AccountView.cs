using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class AccountView
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public AccountView() { }
        public AccountView(AccountAdmin e)
        {
            Id = e.Id;
            FirstName = e.FirstName;
            LastName = e.LastName;
        }
    }
}
