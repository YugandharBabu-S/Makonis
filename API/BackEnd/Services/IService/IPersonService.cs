using BackEnd.Models;

namespace BackEnd.Services.IService
{
    public interface IPersonService
    {
        void AddPerson(PersonViewModel person);
        List<PersonViewModel> GetPersonList();
    }
}
