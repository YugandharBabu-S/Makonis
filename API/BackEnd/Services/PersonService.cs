using BackEnd.Models;
using BackEnd.Services.IService;
using Newtonsoft.Json;

namespace BackEnd.Services
{
    public class PersonService : IPersonService
    {
        private readonly IFileHelper _fileHelper;
        public PersonService(IFileHelper helper)
        {
            _fileHelper = helper;
        }
        public void AddPerson(PersonViewModel person)
        {
            if (person is null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var persons = GetPersonList();
            if (persons == null)
                persons = new List<PersonViewModel>();

            persons.Add(person);
            _fileHelper.WriteFile(JsonConvert.SerializeObject(persons));
        }

        public List<PersonViewModel> GetPersonList()
        {
            return _fileHelper.ReadFile<PersonViewModel>();
        }

    }
}
