using System.ComponentModel.DataAnnotations;

namespace AuthApi.Models
{
    public class ChangeUserModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        //[RegularExpression("^\\S +@\\S +\\.\\S +$", ErrorMessage = "Please enter valid Email")]
        [DataType(DataType.EmailAddress)]
        public string NewEmail { get; set; }

        [Required(ErrorMessage = "Phone Number is required")]
        [DataType(DataType.PhoneNumber)]
        public string NewPhoneNumber { get; set; }

    }
}
