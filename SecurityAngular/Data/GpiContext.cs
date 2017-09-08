using Microsoft.EntityFrameworkCore;

namespace SecurityAngular.Data
{
    public class GpiContext : DbContext
    {
        public GpiContext(DbContextOptions<GpiContext> options): base(options)
        {
        }

    }
}
