﻿using InvestmentPortal.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace InvestmentPortal.Data
{
    public class ApplicationContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }
    }
}
