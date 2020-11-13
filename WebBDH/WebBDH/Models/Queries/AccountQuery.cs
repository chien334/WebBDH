﻿using System;
using System.Collections.Generic;
using System.Text;
using WebBDH.Models;

namespace BDH.Models.Queries
{
    public partial class AccountQuery
    {
        public long Id { get; set; }
        public string UserName { get; set; } 
        public string FirstName { get; set; }
        public string Password { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

    }
}
