using System.ComponentModel.DataAnnotations;

namespace AuthApi.Models
{
    public class ChangePwdModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Current Password is required")]
        public string CurrentPassword { get; set; }

        [Required(ErrorMessage = "New Password is required")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Confirm New Password is required")]
        public string ConfirmNewPassword { get; set; }
    }
}
