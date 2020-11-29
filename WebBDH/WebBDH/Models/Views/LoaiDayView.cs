using System;
using System.Collections.Generic;
using System.Text;
using WebBDH.Models;

namespace BDH.Models.Queries
{
    public partial class LoaiDayView
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public LoaiDayView() { }

        public LoaiDayView(LoaiDay e)
        {
            Id = e.Id;
            Name = e.Name;
            Description = e.Description;
        }
    }
}
