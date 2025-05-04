using api.Domain.Entities;
using api.Infrastructure;

public class UsersService
{
    private readonly ApplicationDbContext _context;

    public UsersService(ApplicationDbContext context)
    {
        _context = context;
    }

    public Users Authenticate(string email, string password)
    {
        var user = _context.Users.SingleOrDefault(u => u.Email == email);
        if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
            return null;

        return user;
    }
}
