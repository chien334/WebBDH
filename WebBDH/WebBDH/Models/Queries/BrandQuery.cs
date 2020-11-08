using System;
using System.Collections.Generic;
using System.Text;
using WebBDH.Models;

namespace BDH.Models.Views
{
    public partial class BrandView
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public BrandView() { }

        public BrandView(Brand e )
        {
            Id = e.Id;
            Name = e.Name;
            Description = e.Description;
        }
    }
}
