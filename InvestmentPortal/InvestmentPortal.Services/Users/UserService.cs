using InvestmentPortal.Common.InputModels.User;
using InvestmentPortal.Common.Responses;
using InvestmentPortal.Data.Models;
using Microsoft.AspNetCore.Identity;

namespace InvestmentPortal.Services.Users
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<RegisterModelResponse> RegisterUserAsync(RegisterModel model)
        {
            var user = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
            };

            var res = await _userManager.CreateAsync(user, model.Password);

            if (!res.Succeeded)
            {
                return RegisterModelResponse.Failure(res.Errors.ToList());
            }
            
            return RegisterModelResponse.Success();
        }
    }
}