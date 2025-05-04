using System;
using System.Linq;
using api.Application.DTOs;

namespace api.Application.Services
{
    public class PaginationService : IPaginationService
    {
        public PaginatedResponse<T> GetPaginatedList<T>(IQueryable<T> query, int pageNumber, int pageSize)
        {
            var totalCount = query.Count();
            var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

            var data = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new PaginatedResponse<T>
            {
                Data = data,
                TotalCount = totalCount,
                CurrentPage = pageNumber,
                TotalPages = totalPages
            };
        }
    }
}
