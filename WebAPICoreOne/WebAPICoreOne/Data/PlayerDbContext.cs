using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPICoreOne.Models;

namespace WebAPICoreOne.Data
{
    public class PlayerDbContext : DbContext
    {
        public PlayerDbContext (DbContextOptions<PlayerDbContext> options)
            : base(options)
        {
        }

        public DbSet<WebAPICoreOne.Models.Player> Player { get; set; } = default!;
    }
}
