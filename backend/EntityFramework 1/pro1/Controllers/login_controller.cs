using Microsoft.AspNetCore.Mvc;
using pro1.Models;
using pro1.Data;
using Microsoft.EntityFrameworkCore;

namespace pro1.Controllers
{
    public class LoginC : Controller
    {
        private readonly Datacontext _datacontext;

        public LoginC(Datacontext datacontext)
        {
            _datacontext = datacontext;
        }


        [Route("login")]
        [HttpPost]

        public async Task<IActionResult> Index([FromBody] Login posted_body)
        {


            

            var hasData = await _datacontext.UserBook.AnyAsync(any => any.UserId == posted_body.UserId && any.Password ==posted_body.Password);

            if (hasData)
            {

                var token=Guid.NewGuid().ToString();

                // token should also be saved, and verified in  every api request. user di and token should match.

                Sendresponse res = new Sendresponse { status = "Success", payload = token };
                return Json(res);
            }
            else
            {
                Sendresponse res = new Sendresponse { status = "Error", payload = "Please try again" };
                return Json(res);
            }


        }



    }
}
