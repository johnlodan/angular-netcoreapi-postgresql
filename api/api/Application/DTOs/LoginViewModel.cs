using System.ComponentModel.DataAnnotations;

namespace api.Application.DTOs
{
    public class LoginViewModel
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password {  get; set; }
    }
}
