﻿using BDH.Data;
using BDH.Models;
using BDH.Models.Queries;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Models;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;

namespace BDH.Services
{
    public partial interface IQueryServices
    {
        Task<AccountView> Authenticate(string userName,string passWord);
    }
}