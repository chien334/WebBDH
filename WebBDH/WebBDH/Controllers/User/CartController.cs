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
using WebBDH.Models.Queries;

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
        //[Authorize]
        [HttpPost]
        public async Task<JsonResult> LoadCart(QueryModel<CartQuery> query, CancellationToken cancelllationToken)
        {
            var data = await _service.LoadCart(query, cancelllationToken);
            double total = 0;
            foreach (CartItem d in data){
                total += (double)d.Price;
            }
            return new JsonResult(new
            {
                Items = data.ToArray(),
                TotalPrice=total,
                Success = data.Count() > 0 ? true : false,
                ToTalCount = data.TotalCount
            });
        }
        [HttpPost]
        public async Task<JsonResult> AddCartItem(CreateModel<CartItem> query, CancellationToken cancelllationToken)
        {
            var check = await _service.CheckCartItem((long)query.Entity.ProductId, (long)query.Entity.CartId);
            if (check==null)
            {
                SetAddNew(query);
                query.Entity.Quantity = 1;
                await _service.AddAsync(query.Entity, cancelllationToken);
            }
            else
            {
                check.Quantity+=1;
                SetUpdate(check);
                await _service.UpdateAsync(check, cancelllationToken);
            }
            var count = await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query.Entity
            });
        }
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
        [HttpPost]
        public async Task<JsonResult> AddOrder(CreateModel<OrderDetail> query, CancellationToken cancelllationToken)
        {
            //Luu thong tin hoa don
            UserOrder order = new UserOrder();
            double Total = 0;
            double Discount = 0;
            foreach (CartItem i in query.Entity.cartitems)
            {
                Total += (double)i.Price;
                Discount += (double)i.Discount;
            }
            order.FirstName = query.Entity.FirstName;
            order.LastName = query.Entity.LastName;
            order.Phone = query.Entity.Phone;
            order.City = query.Entity.City;
            order.Province = query.Entity.Province;
            order.Content = query.Entity.Content;
            order.Total = Total;
            order.Discount = Discount;
            order.GrandTotal = Total - Discount;
            SetAddNewOrder(order);
            await _service.AddAsync(order, cancelllationToken);
            var count = await _service.SaveAsync(cancelllationToken);
            //Luu thong tin chi tiet hoa don
            long OrderId = await _service.LastIdOrderAsync();
            foreach (CartItem i in query.Entity.cartitems)
            {
                OrderItem item = new OrderItem(i);
                item.OrderId = OrderId;
                SetAddNewOrderItem(item);
                await _service.AddAsync(item, cancelllationToken);
            }
            count+= await _service.SaveAsync(cancelllationToken);
            foreach (CartItem i in query.Entity.cartitems)
            {
                await _service.DeleteCartItem(i.Id);
            }
            await _service.SaveAsync(cancelllationToken);
            return new JsonResult(new
            {
                Success = count > 0,
                Entity = query
            });
        }

        private void SetAddNew(CreateModel<CartItem> query)
        {
            query.Entity.LastUpdateBy = query.Entity.CartId.ToString();
            query.Entity.LastUpdateTime = DateTime.Now;
            query.Entity.CreateBy = query.Entity.CartId.ToString();
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
        private void SetUpdate(CartItem query)
        {
            query.LastUpdateBy = query.CartId.ToString();
            query.LastUpdateTime = DateTime.Now;
        }
    }
}
