using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class PersonViewModel
    {
        [Required]
        [MaxLength(50)]
        public string? FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? LastName { get; set; }
    }
}
