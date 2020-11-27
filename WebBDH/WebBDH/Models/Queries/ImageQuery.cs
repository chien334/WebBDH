using System;
using System.Collections.Generic;
using System.Text;
using WebBDH.Models;

namespace BDH.Models.Queries
{
    public partial class ImageQuery
    {
        public long Id { get; set; }
        public string Path { get; set; } 
        public long? IdProduct { get; set; }

    }
}
