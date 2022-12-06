using System.ComponentModel.DataAnnotations;

namespace AuthApi.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        //[RegularExpression("^\\S +@\\S +\\.\\S +$", ErrorMessage = "Please enter valid Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password must contain at least 8 characters")]
        [MaxLength(20, ErrorMessage = "Password must contain a maximum of 20 characters")]
        public string Password { get; set; }

        /*[Compare("Password", ErrorMessage ="Please confirm your Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }*/

       //[Required(ErrorMessage = "Phone Number is required")]
       //[DataType(DataType.PhoneNumber)]
       //public int? PhoneNumber { get; set; }
    }
}
