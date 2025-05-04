using api.Application.DTOs;
using api.Application.Services;
using Microsoft.AspNetCore.Mvc;

public class BaseController : ControllerBase
{
    private readonly IPaginationService _paginationService;

    public BaseController(IPaginationService paginationService)
    {
        _paginationService = paginationService;
    }

    public PaginatedResponse<T> Paginate<T>(IQueryable<T> query, int pageNumber, int pageSize)
    {
        return _paginationService.GetPaginatedList(query, pageNumber, pageSize);
    }
}
