using System.ComponentModel.DataAnnotations;

namespace api.Domain.Entities
{
    public class Category
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [StringLength(100, MinimumLength =3)]
        public string Name { get; set; }
        [Required]
        [StringLength(500, MinimumLength = 10)]
        public string Description { get; set; }
        [Required]
        [Url]
        public string Image {  get; set; }
        [Required]
        public Guid UserId {get; set; }
        public DateTime CreatedAt {get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    }
}
