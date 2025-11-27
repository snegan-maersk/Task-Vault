# Task-Vault
A task management web app where users can add, edit, mark complete, and delete tasks.

## Super Simple Setup

This is a very basic task app with only **Add** and **Delete** functionality.

### Backend (C# / .NET)

1. Open a terminal and navigate to the Backend folder:
   ```bash
   cd Backend
   ```

2. Run the backend:
   ```bash
   dotnet run --urls=http://localhost:5000
   ```

The API will run on `http://localhost:5000`

### Frontend (Vue.js)

1. Open another terminal and navigate to the Frontend folder:
   ```bash
   cd Frontend
   ```

2. Open `index.html` in your browser, or use a simple HTTP server:
   ```bash
   python -m http.server 8080
   ```
   OR
   ```bash
   npx serve
   ```

3. Open your browser to `http://localhost:8080`

## Features

- ? Add tasks
- ? Delete tasks
- ?? Tasks stored in memory (resets when backend restarts)

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Add a new task
- `DELETE /api/tasks/{id}` - Delete a task
