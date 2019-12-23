using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderPlacementSystem.Data;

namespace OrderPlacementSystem
{
    [Route("orders")]
    [ApiController]
    public class OrdersController : Controller
    {
        private readonly PizzaStoreContext _db;

        public OrdersController(PizzaStoreContext db)
        {
            _db = db;
        }
      
        [HttpPost]
        public async Task SaveOrder(int specialid)
        {
            Order order = new Order();
            order.SpecialId = specialid;
            order.CreatedTime = DateTime.Now;

            await _db.Orders.AddAsync(order);
            _db.SaveChanges();
            Console.WriteLine("Saved");
        }
    }
}
