using Microsoft.EntityFrameworkCore;
using Restore.API.Entities;

namespace Restore.API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }
    }
}
