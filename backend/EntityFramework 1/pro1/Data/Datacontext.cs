using Microsoft.EntityFrameworkCore;

namespace pro1.Data
{
    public class Datacontext:DbContext
    {
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
        {
        }

        public DbSet<ToPost> PostBook { get; set; }
        public DbSet<UserData> UserBook { get; set; }
    }

   
}
