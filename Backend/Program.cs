var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

var tasks = new List<TaskItem>();
var nextId = 1;

app.MapGet("/api/tasks", () => tasks);

app.MapPost("/api/tasks", (TaskItem task) =>
{
    task.Id = nextId++;
    tasks.Add(task);
    return task;
});

app.MapDelete("/api/tasks/{id}", (int id) =>
{
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task == null)
        return Results.NotFound();
    
    tasks.Remove(task);
    return Results.Ok();
});

app.Run();

public class TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; }
}
