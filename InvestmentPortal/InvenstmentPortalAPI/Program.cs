using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using InvestmentPortal.Data;
using Microsoft.EntityFrameworkCore;
using InvestmentPortal.Data.Models;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("InvenstmentPortalAPIContextConnection") ?? throw new InvalidOperationException("Connection string 'InvenstmentPortalAPIContextConnection' not found.");

builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddIdentityCore<ApplicationUser>()
    .AddEntityFrameworkStores<ApplicationContext>()
    .AddApiEndpoints()
    .AddDefaultTokenProviders();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapIdentityApi<ApplicationUser>();

app.Run();
