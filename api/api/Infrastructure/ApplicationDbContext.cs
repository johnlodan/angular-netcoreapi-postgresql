using api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Infrastructure
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Users> Users{ get; set; }
    }
}
