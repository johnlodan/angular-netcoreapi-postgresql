using Microsoft.AspNetCore.Mvc;
using api.Application.Services;
using api.Application.DTOs;  
using api.Domain.Entities;
using Microsoft.AspNetCore.Authorization;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController(CategoryService categoryService) : ControllerBase
    {
        private readonly CategoryService _categoryService = categoryService;
    

        [HttpGet("public")]
        public IActionResult GetCategoriesPublic(int pageNumber = 1, int pageSize = 10)
        {
            var result = _categoryService.GetPaginatedCategoriesPublic(pageNumber, pageSize);
            return Ok(result);
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetCategories(int pageNumber = 1, int pageSize = 10)
        {
            var result = _categoryService.GetPaginatedCategories(pageNumber, pageSize);
            return Ok(result);
        }


        [HttpPost]
        [Authorize]
        public ActionResult<Category> CreateCategory([FromBody] Category category)
        {
            var created = _categoryService.CreateCategory(category);
            return Ok(created);
        }

        [HttpPut("{id}")]
        [Authorize]
        public ActionResult<Category> UpdateCategory(Guid id, [FromBody] Category category)
        {
            var updated = _categoryService.UpdateCategory(id, category);
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public ActionResult<Category> DeleteCategory(Guid id)
        {
            var success = _categoryService.DeleteCategory(id);
            if (!success)
                return NotFound();

            return NoContent();
        }

    }
}
