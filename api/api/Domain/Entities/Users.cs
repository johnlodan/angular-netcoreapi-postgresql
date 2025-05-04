using System.ComponentModel.DataAnnotations;

namespace api.Domain.Entities
{
    public class Users
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [StringLength(25, MinimumLength =3)]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(25, MinimumLength = 2)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(25, MinimumLength = 2)]
        public string LastName { get; set; }
        [Required]
        public string Password {  get; set; }
    }
}
