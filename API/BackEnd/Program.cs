using Microsoft.Extensions.Configuration;

using BackEnd.Models;
using BackEnd.Services;
using BackEnd.Services.Helpers;
using BackEnd.Services.IService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOptions<FileLocationOptions>().Bind(builder.Configuration.GetSection(FileLocationOptions.FileLocation));
builder.Services.AddSingleton<IFileHelper, FileHelper>();
builder.Services.AddScoped<IPersonService, PersonService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corspolicy", build => { build.WithOrigins("*")
    .AllowAnyMethod().AllowAnyHeader(); }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corspolicy");

app.UseHttpsRedirection();
//app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
