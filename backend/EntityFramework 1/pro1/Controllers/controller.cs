using Microsoft.AspNetCore.Mvc;
using pro1.Models;
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
        
        public async Task<IActionResult> Index([FromBody] Passenger_details_posted posted_body) 
        {
            
            var id= Guid.NewGuid();
            ToPost post = new ToPost{Id = id, passenger = posted_body.passenger, from = posted_body.from, to = posted_body.to, doj = posted_body.doj, seat = posted_body.seat };
           
            _datacontext.Add(post);
            await _datacontext.SaveChangesAsync();

            Console.WriteLine(posted_body.ToString());

            Sendresponse res = new Sendresponse { status = "Success", payload = "Nothing for now" };

            return Json(res);
        }

            

    }
}
