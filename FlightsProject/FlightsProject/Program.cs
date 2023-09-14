var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen( c =>
{
    c.AddServer(new Microsoft.OpenApi.Models.OpenApiServer {
        Description = "Development Server",
        Url = "https://localhost:7167"
    });

    //sets a unique identifier for each API operation by combining the action and controller values from the route values of the action descriptor.
    c.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["action"] + e.ActionDescriptor.RouteValues["controller"]}");
});


var app = builder.Build();
//which domains are allowed to connect with our backend
app.UseCors(builder => builder.WithOrigins("*"));
app.UseSwagger().UseSwaggerUI();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

// this command will recreate our client api
//npx ng-openapi-gen