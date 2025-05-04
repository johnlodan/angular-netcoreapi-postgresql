using api.Application.DTOs;
using api.Domain.Entities;
using api.Infrastructure;
using AutoMapper;
using System.Collections.Generic;
using System.Security.Claims;

namespace api.Application.Services
{
    public class CategoryService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IPaginationService _paginationService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CategoryService(ApplicationDbContext context, IMapper mapper, IHttpContextAccessor httpContextAccessor, IPaginationService paginationService)
        {
            _context = context;
            _mapper = mapper;
            _paginationService = paginationService;
            _httpContextAccessor = httpContextAccessor;
        }

        public Category CreateCategory(Category category)
        {
            if (!Guid.TryParse(_httpContextAccessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier)?.Value, out Guid userId))
            {
                throw new UnauthorizedAccessException("Invalid User ID.");
            }

            category.UserId = userId;
            _context.Categories.Add(category);  
            _context.SaveChanges(); 
            return category;    
        }

        public Category? UpdateCategory(Guid id, Category updatedCategory)
        {
            var currentCategory = _context.Categories.Find(id);
            if (currentCategory == null) return null;

            currentCategory.Name = updatedCategory.Name;
            currentCategory.Description = updatedCategory.Description;
            currentCategory.Image = updatedCategory.Image;

            _context.SaveChanges();
            return currentCategory;
        }

        public bool DeleteCategory(Guid id)
        {
            var category = _context.Categories.Find(id);
            if (category == null)
                return false;

            _context.Categories.Remove(category);
            _context.SaveChanges();
            return true;
        }

        public PaginatedResponse<Category> GetPaginatedCategories(int pageNumber, int pageSize)
        {
            var userId = _httpContextAccessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var query = _context.Categories.AsQueryable().Where(w => w.UserId.ToString() == userId).OrderByDescending(w => w.CreatedAt);
            return _paginationService.GetPaginatedList(query, pageNumber, pageSize);
        }

        public PaginatedResponse<Category> GetPaginatedCategoriesPublic(int pageNumber, int pageSize)
        {
            var query = _context.Categories.AsQueryable();
            return _paginationService.GetPaginatedList(query, pageNumber, pageSize);
        }

        public IEnumerable<CategoryViewModel> GetCategories()
        {
            var data = new List<Category>
            {  };

            var categoryViewModels = _mapper.Map<IEnumerable<CategoryViewModel>>(data);

            return categoryViewModels;

        }
    }
}
