using Microsoft.AspNetCore.Mvc;
using MyMicroservice.Models;
using pro1.Data;

namespace MyMicroservice.Controllers
{
    public class PController : Controller
    {
        private readonly Datacontext _datacontext;


        public PController(Datacontext datacontext)
        {
            _datacontext = datacontext;
        }


        [Route("dbinsert")]
        [HttpPost]
        
        public IActionResult Index([FromBody] Passenger_details_posted posted_body) 
        {
            Datacontext datacontext = _datacontext;

            var id= Guid.NewGuid();
            ToPost post = new ToPost{Id = id, passenger = posted_body.passenger, from = posted_body.from, to = posted_body.to, doj = posted_body.doj, seat = posted_body.seat };
            datacontext.Add(post);
            datacontext.SaveChanges();
            return Json(posted_body);
        }

            

    }
}
