using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class ProductView
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? IdLoaiDay { get; set; }
        public long? IdMatDh { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public string Color { get; set; }
        public double? Weight { get; set; }
        public bool? Sex { get; set; }
        public long? IdBrand { get; set; }
        public ProductView() { }
        public ProductView(Product e)
        {
            Id = e.Id;
            Name = e.Name;
            IdLoaiDay = e.IdLoaiDay;
            IdMatDh = e.IdMatDh;
            Description = e.Description;
            Price = e.Price;
            Color = e.Color;
            Weight = e.Weight;
            Sex = e.Sex;
            IdBrand = e.IdBrand;
        }
    }
}
