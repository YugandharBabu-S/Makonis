using BackEnd.Models;
using BackEnd.Services.IService;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private IPersonService _personService;

       public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        [Route("list")]
        public IEnumerable<PersonViewModel>  GetPersons()
        {
            return _personService.GetPersonList();
        }

        [HttpPost]
        [Route("new")]
        public IActionResult AddPerson([FromBody] PersonViewModel person)
        {
            if (ModelState.IsValid)
            {
                _personService.AddPerson(person);
                return Ok();
;            }
          
          return BadRequest();
        }

          
    }
}
