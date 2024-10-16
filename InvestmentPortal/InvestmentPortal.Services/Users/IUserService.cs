using InvestmentPortal.Common.InputModels.User;
using InvestmentPortal.Common.Responses;

namespace InvestmentPortal.Services.Users
{
    public interface IUserService
    {
        Task<RegisterModelResponse> RegisterUserAsync(RegisterModel model);
    }
}
