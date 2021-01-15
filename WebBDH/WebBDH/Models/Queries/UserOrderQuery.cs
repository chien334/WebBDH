using System;
using System.Collections.Generic;

namespace WebBDH.Models.Queries
{
    public partial class UserOrderQuery
    {

        public long Id { get; set; }
        public long? UserId { get; set; }
        public double? Total { get; set; }
        public double? Discount { get; set; }
        public double? GrandTotal { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Content { get; set; }
         

    }
}
