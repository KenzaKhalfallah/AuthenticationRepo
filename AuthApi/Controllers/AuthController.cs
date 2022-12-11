using AuthApi.Application;
using AuthApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<ApplicationUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }


        [HttpPost]
        [Route("Registration")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await _userManager.FindByNameAsync(model.UserName);
            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel
                {
                    Status = "Error",
                    Message = "User Already Exists ! "
                });
            }
            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
                PhoneNumber = model.PhoneNumber,
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in result.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel
                {
                    Status = "Error",
                    Message = string.Join(",", errors)
                });
            }
            return Ok(new ResponseModel { Status = "Success", Message = "User Created Successfully ! " });
        }


        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };
                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }
                var authSigninkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:SecretKey"]));
                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigninkey, SecurityAlgorithms.HmacSha256)
                    );
                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = token.ValidTo }); ;
            }
            return Unauthorized();
        }

        [HttpGet]
        [Route("Get-All-Users")]
        public async Task<IEnumerable<UserModel>> ListUsers()
        {
            var listUsers = await _userManager.Users.Select(p => new UserModel
            {
                UserName = p.UserName,
                Email = p.Email,
                PhoneNumber = p.PhoneNumber,
            }).ToListAsync();

            return listUsers;
        }

        [HttpPost]
        [Route("Change-Password")]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePwdModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new ResponseModel { Status = "Error", Message = "User does not exists ! " });
            }
            if (string.Compare(model.NewPassword, model.ConfirmNewPassword) != 0)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new ResponseModel { Status = "Error", Message = "Confirm New Password does not match the New Password !  ! " });
            }
            var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
            if (!result.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in result.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel { Status = "Error", Message = string.Join(",", errors) });
            }
            return Ok(new ResponseModel { Status = "Success", Message = "Password Changed Successfully ! " });
        }


        [HttpPost]
        [Route("Reset-Password-Token")]
        public async Task<IActionResult> ResetPasswordToken([FromBody] UsernameModel model)
        {
            var user = await _userManager.FindByNameAsync(model.Username);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new ResponseModel { Status = "Error", Message = "User does not exists ! " });
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            return Ok(new { token = token });
        }


        [HttpPost]
        [Route("Reset-Password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPwdModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new ResponseModel { Status = "Error", Message = "User does not exists ! " });
            }
            if (string.Compare(model.NewPassword, model.ConfirmNewPassword) != 0)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new ResponseModel { Status = "Error", Message = "Confirm New Password does not match the New Password !  ! " });
            }
            if (string.IsNullOrEmpty(model.Token))
            {
                return StatusCode(StatusCodes.Status400BadRequest, new ResponseModel { Status = "Error", Message = "Invalid Token !" });
            }
            var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);
            if (!result.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in result.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel { Status = "Error", Message = string.Join(",", errors) });
            }
            return Ok(new ResponseModel { Status = "Success", Message = "Password Reseted Successfully ! " });
        }


        [HttpPost]
        [Route("Change-User-ByName")]
        public async Task<IActionResult> ChangeUser([FromBody] ChangeUserModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new ResponseModel { Status = "Error", Message = "User does not exists ! " });
            }
            var tokenEmail = await _userManager.GenerateChangeEmailTokenAsync(user, model.NewEmail);
            var ChangeEmail = await _userManager.ChangeEmailAsync(user, model.NewEmail, tokenEmail);
            if (!ChangeEmail.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in ChangeEmail.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel { Status = "Error", Message = string.Join(",", errors) });
            }
            var tokenPhoneNumber = await _userManager.GenerateChangePhoneNumberTokenAsync(user, model.NewPhoneNumber);
            var ChangePhoneNumber = await _userManager.ChangePhoneNumberAsync(user, model.NewPhoneNumber, tokenPhoneNumber);
            if (!ChangePhoneNumber.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in ChangePhoneNumber.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel { Status = "Error", Message = string.Join(",", errors) });
            }
            return Ok(new ResponseModel { Status = "Success", Message = "Contact User Changed Successfully ! " });
        }


        [HttpDelete]
        [Route("Delete-User")]
        public async Task<IActionResult> DeleteUser([FromBody] UsernameModel model)
        {
            // "ResetPwdTokenModel" used just because it contains only one attribute "username"

            var user = await _userManager.FindByNameAsync(model.Username);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new ResponseModel { Status = "Error", Message = "User does not exists ! " });
            }
            var delete = await _userManager.DeleteAsync(user);
            if (!delete.Succeeded)
            {
                var errors = new List<string>();
                foreach (var error in delete.Errors)
                {
                    errors.Add(error.Description);
                }
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseModel { Status = "Error", Message = string.Join(",", errors) });
            }
            return Ok(new ResponseModel { Status = "Success", Message = "User Deleted Successfully ! " });
        }



        }

    }
