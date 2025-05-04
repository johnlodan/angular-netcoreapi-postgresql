using api.Application.DTOs;
using api.Application.Services;
using api.Domain.Entities;
using api.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly UsersService _userService;
    private readonly AuthService _authService;

    public AuthController(ApplicationDbContext context,UsersService userService, AuthService authService)
    {
        _context = context;
        _userService = userService;
        _authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginViewModel login)
    {
        var user = _userService.Authenticate(login.Email, login.Password);
        if (user == null)
            return Unauthorized("Invalid credentials");

        var token = _authService.GenerateJwtToken(user);
        return Ok(new {Token = token});
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] Users user)
    {
        var isExisting = _context.Users.FirstOrDefault(u => u.Email == user.Email);
        if (isExisting != null)
        {
            return BadRequest("Email already exists.");
        }
        var success = _authService.Register(user);
        return Ok(success);
    }
}
