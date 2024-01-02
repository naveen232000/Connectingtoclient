using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPIHost.Models;

namespace WebAPIHost.Data
{
    public class TasksDbContext : DbContext
    {
        public TasksDbContext (DbContextOptions<TasksDbContext> options)
            : base(options)
        {
        }

        public DbSet<WebAPIHost.Models.Task> Task { get; set; } = default!;
    }
}
