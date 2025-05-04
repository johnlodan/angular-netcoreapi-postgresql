using System.Linq;
using api.Application.DTOs;

namespace api.Application.Services;
public interface IPaginationService
{
    PaginatedResponse<T> GetPaginatedList<T>(IQueryable<T> query, int pageNumber, int pageSize);
}
