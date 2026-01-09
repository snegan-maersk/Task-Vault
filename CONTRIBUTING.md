# Task-Vault Contributing Guide

## Making a Pull Request

Follow these steps to contribute to the Task-Vault project:

### 1. Create a New Branch
```bash
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/` - for new features (e.g., `feature/add-priority`)
- `bugfix/` - for bug fixes (e.g., `bugfix/fix-delete-endpoint`)
- `hotfix/` - for urgent production fixes
- `docs/` - for documentation updates

### 2. Make Your Changes
- Edit the code files
- Test your changes locally using `dotnet run` in the Backend directory
- Ensure the build succeeds: `dotnet build Backend/Backend.csproj`

### 3. Stage and Commit Your Changes
```bash
git add .
git commit -m "Add descriptive commit message"
```

**Commit message examples:**
- `Add task completion toggle endpoint`
- `Fix CORS policy configuration`
- `Update API documentation`

### 4. Push Your Branch
```bash
git push origin feature/your-feature-name
```

### 5. Create a Pull Request
1. Go to https://github.com/snegan-maersk/Task-Vault
2. Click the **"Compare & pull request"** button
3. Fill out the PR template with:
   - Description of changes
   - Type of change (feature, bugfix, etc.)
   - Testing performed
4. Click **"Create pull request"**

### 6. CI/CD Pipeline
Once you create a PR, the GitHub Actions workflow will automatically:
- ? Restore dependencies
- ? Build the project
- ? Run tests (if available)
- ? Create a publish artifact

### 7. Code Review & Merge
- Wait for code review from maintainers
- Address any feedback or requested changes
- Once approved, your PR will be merged to main

## Local Development

### Prerequisites
- .NET 8.0 SDK
- Visual Studio 2022 or VS Code

### Running Locally
```bash
cd Backend
dotnet restore
dotnet build
dotnet run
```

The API will be available at `http://localhost:5000` (or the port shown in console).

### API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}/toggle` - Toggle task completion status
- `DELETE /api/tasks/{id}` - Delete a task

## Syncing with Main Branch

Before creating a PR, ensure your branch is up to date:

```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
```

Resolve any merge conflicts if they arise.

## Questions?

If you have questions about contributing, feel free to open an issue or reach out to the maintainers.
