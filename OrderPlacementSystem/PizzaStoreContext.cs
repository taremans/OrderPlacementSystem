using Microsoft.EntityFrameworkCore;
using OrderPlacementSystem.Data;

namespace OrderPlacementSystem
{
    public class PizzaStoreContext : DbContext
    {
        public PizzaStoreContext()
        {
        }

        public PizzaStoreContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }

        public DbSet<PizzaSpecial> Specials { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          
        }
    }
}
