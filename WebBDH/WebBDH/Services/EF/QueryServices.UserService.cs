﻿using BDH.Data;
using BDH.Data.EFService;
using BDH.Models;
using BDH.Models.Queries;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using WebBDH.Helpers;
using WebBDH.Models;
using WebBDH.Models.Queries;
using WebBDH.Models.Views;
using WebBDH.Responsitories;

namespace BDH.Services.EF
{
    public partial class QueryServices 
    {
        public async Task<AccountView> Authenticate(string userName, string passWord)
        {
            var user = dbContext.Set<AccountAdmin>()
                .AsNoTracking()
                .Where(x => x.UserName == userName && x.Password == passWord)
                .Select(x=> new AccountView(x))
                .FirstOrDefault();

            if (user == null) return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role),
                }),
                Expires=DateTime.UtcNow.AddDays(7),
                SigningCredentials= new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Role = tokenHandler.WriteToken(token);
            user.Password = null;
            return await Task.FromResult(user);
        }
    }
}
