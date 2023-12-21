using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace pro1.Data
{
    public class UserData
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? UserId { get; set; }
        public string? Password { get; set; }
    }
}
 