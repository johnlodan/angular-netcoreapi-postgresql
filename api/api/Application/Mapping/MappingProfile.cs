using AutoMapper;
using api.Domain.Entities;
using api.Application.DTOs;

namespace api.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryViewModel>().ReverseMap();
            CreateMap<Users, UsersViewModel>().ReverseMap();
        }
    }
}
