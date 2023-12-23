using Microsoft.AspNetCore.Mvc;
using pro1.Models;
using pro1.Data;
using Microsoft.EntityFrameworkCore;

namespace pro1.Controllers
{
    public class New_user : Controller
    {
        private readonly Datacontext _datacontext;

        public New_user(Datacontext datacontext)
        {
            _datacontext = datacontext;
        }


        [Route("newuser")]
        [HttpPost]

        public async Task<IActionResult> Index([FromBody] new_user_model posted_body)
        {

            
            UserData post = new() {Name=posted_body.Name, UserId=posted_body.UserId, Password=posted_body.Password  };

            var hasData = await _datacontext.UserBook.AnyAsync(any => any.UserId == posted_body.UserId);

            if (!hasData)
            {

                await _datacontext.UserBook.AddAsync(post);
                await _datacontext.SaveChangesAsync();

                Sendresponse res = new Sendresponse { status = "Success", payload = "Nothing for now" };
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
