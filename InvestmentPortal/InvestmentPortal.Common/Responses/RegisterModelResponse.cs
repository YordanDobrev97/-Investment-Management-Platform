using Microsoft.AspNetCore.Identity;

namespace InvestmentPortal.Common.Responses
{
    public class RegisterModelResponse
    {
        public bool Succeeded { get; set; }

        public List<IdentityError> Errors { get; set; }

        public static RegisterModelResponse Success()
        {
            return new RegisterModelResponse { Succeeded = true };
        }

        public static RegisterModelResponse Failure(IEnumerable<IdentityError> errors)
        {
            return new RegisterModelResponse
            {
                Succeeded = false,
                Errors = errors.ToList(),
            };
        }
    }
}
