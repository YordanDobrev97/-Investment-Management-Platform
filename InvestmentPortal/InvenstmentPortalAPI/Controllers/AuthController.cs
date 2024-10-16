using InvestmentPortal.Common.InputModels.User;
using InvestmentPortal.Services.Users;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.MSIdentity.Shared;

namespace InvenstmentPortalAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }

            var res = await _userService.RegisterUserAsync(model);
            
            if (res.Succeeded)
            {
                return Ok();
            }

            return BadRequest(res.Errors);
        }
    }
}
