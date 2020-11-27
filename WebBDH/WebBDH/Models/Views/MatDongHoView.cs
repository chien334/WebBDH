using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class MatDongHoView
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public MatDongHoView() { }
        public MatDongHoView(MatDongHo e)
        {
            Id = e.Id;
            Name = e.Name;
            Description = e.Description;
        }
    }
}
