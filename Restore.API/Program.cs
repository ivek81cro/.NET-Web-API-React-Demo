using Microsoft.EntityFrameworkCore;
using Restore.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(opt => {
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});

// Configure the HTTP request pipeline.
app.MapControllers();

DbInitializer.InitDb(app);


app.Run();
