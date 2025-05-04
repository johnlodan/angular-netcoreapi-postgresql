using System.ComponentModel.DataAnnotations;

namespace api.Application.DTOs
{
    public class UsersViewModel
    {
        [Key]
        public Guid Id { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
