using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class OrderItem
    {
        public long Id { get; set; }
        public long? ProductId { get; set; }
        public long? OrderId { get; set; }
        public string Sku { get; set; }
        public double? Price { get; set; }
        public double? Discount { get; set; }
        public short? Quantity { get; set; }
        public string Content { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual UserOrder Order { get; set; }
        public virtual Product Product { get; set; }
        public OrderItem() { }
        public OrderItem(CartItem i) 
        {
            ProductId = i.ProductId;
            Sku = i.Sku;
            Price = i.Price;
            Discount = i.Discount;
            Quantity = i.Quantity;
            Content = i.Content;
        }
    }
}
