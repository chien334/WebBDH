using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BDH.Models;
using BDH.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebBDH.Models;
using WebBDH.Models.ModelView;

namespace WebBDH.Controllers.User
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private IQueryServices _service;

        public CartController(IQueryServices service)
        {
            _service = service;
        }
        [Authorize]
        [HttpPost]
        public async Task<JsonResult> AddCartItem(CreateModel<CartItem> query, CancellationToken cancelllationToken)
        {
            SetAddNew(query);
            query.Entity.Quantity = 1;
            await _service.AddAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        [Authorize]
        [HttpPost]
        public async Task<JsonResult> DeleteCartItem(CreateModel<CartItem> query, CancellationToken cancelllationToken)
        {
            await _service.DeleteAsync(query.Entity, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
        [Authorize]
        [HttpPost]
        public async Task<JsonResult> AddOrder(OrderDetail query, CancellationToken cancelllationToken)
        {
            //Luu thong tin hoa don
            UserOrder order = new UserOrder();
            double Total = 0;
            double Discount = 0;
            foreach (CartItem i in query.cartitems)
            {
                order.Total += (double)i.Price*i.Quantity;
                order.Discount += (double)i.Discount*i.Quantity;
            }
            order.FirstName = query.FirstName;
            order.LastName = query.LastName;
            order.Phone = query.Phone;
            order.City = query.City;
            order.Province = query.Province;
            order.Content = query.Content;
            order.GrandTotal = Total - Discount;
            SetAddNewOrder(order);
            await _service.AddAsync(order, cancelllationToken);
            //Luu thong tin chi tiet hoa don
            long OrderId = await _service.LastIdOrderAsync();
            foreach (CartItem i in query.cartitems)
            {
                OrderItem item = new OrderItem(i);
                item.OrderId = OrderId + 1;
                SetAddNewOrderItem(item);
                await _service.AddAsync(item, cancelllationToken);
            }
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query
            });
        }

        private void SetAddNew(CreateModel<CartItem> query)
        {
            query.Entity.LastUpdateBy = "user....";
            query.Entity.LastUpdateTime = DateTime.Now;
            query.Entity.CreateBy = "user....";
            query.Entity.CreateTime = DateTime.Now;
        }
        private void SetAddNewOrder(UserOrder order)
        {
            order.LastUpdateBy = "user";
            order.LastUpdateTime = DateTime.Now;
            order.CreateBy = "user";
            order.CreateTime = DateTime.Now;
        }
        private void SetAddNewOrderItem(OrderItem order)
        {
            order.LastUpdateBy = "user";
            order.LastUpdateTime = DateTime.Now;
            order.CreateBy = "user";
            order.CreateTime = DateTime.Now;
        }
    }
}
