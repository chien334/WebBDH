using System;
using System.Collections.Generic;

namespace WebBDH.Models.Views
{
    public partial class ImageView
    {
        public long Id { get; set; }
        public string Path { get; set; } 
        public long? IdProduct { get; set; }
        public ImageView() { }
        public ImageView(Image e)
        {
            Id = e.Id;
            Path = e.Path;
            IdProduct = e.IdProduct;
        }
    }
}
