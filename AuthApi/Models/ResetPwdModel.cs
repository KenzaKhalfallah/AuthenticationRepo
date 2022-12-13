using System.ComponentModel.DataAnnotations;

namespace AuthApi.Models
{
    public class ResetPwdModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "New Password is required")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Confirm New Password is required")]
        public string ConfirmNewPassword { get; set; }

       // public string Token { get; set; }
    }
}
