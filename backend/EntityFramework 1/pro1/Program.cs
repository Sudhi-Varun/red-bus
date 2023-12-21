
using Microsoft.EntityFrameworkCore;
using pro1.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<Datacontext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("TestDb")));


builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var Datacontext = scope.ServiceProvider.GetRequiredService<Datacontext>();
        Datacontext.Database.EnsureCreated();
                
    }
}


app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseRouting();
app.MapControllers();
app.Run();
