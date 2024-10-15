using Microsoft.AspNetCore.Identity;

namespace InvestmentPortal.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Roles = new HashSet<ApplicationRole>();
        }

        public HashSet<ApplicationRole> Roles { get; set; }
    }
}
