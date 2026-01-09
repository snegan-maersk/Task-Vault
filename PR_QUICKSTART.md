# Quick Start: Create Your First PR

## Commands to Run Now:

### 1. Create a new branch
```bash
git checkout -b feature/add-task-completion
```

### 2. Check what files changed
```bash
git status
```

### 3. Stage all changes
```bash
git add .
```

### 4. Commit the changes
```bash
git commit -m "Add task completion toggle feature and CI/CD workflow"
```

### 5. Push to GitHub
```bash
git push origin feature/add-task-completion
```

### 6. Create Pull Request
After pushing, GitHub will show a link in the terminal. Click it or:
- Go to: https://github.com/snegan-maersk/Task-Vault
- Click "Compare & pull request"
- Fill out the template
- Click "Create pull request"

## What Was Added:

? **New Feature**: Task completion toggle
   - Added `IsCompleted` property to `TaskItem`
   - Added `PUT /api/tasks/{id}/toggle` endpoint
   
? **CI/CD Workflow**: `.github/workflows/ci-cd.yml`
   - Automated build and test on PR and push to main
   - Creates deployable artifacts
   
? **PR Template**: `.github/pull_request_template.md`
   - Structured format for all pull requests
   
? **Documentation**: `CONTRIBUTING.md`
   - Complete guide for making PRs
   - Local development instructions

## Test the New Feature Locally:

```bash
cd Backend
dotnet run
```

Then test with curl or Postman:
```bash
# Create a task
curl -X POST http://localhost:5000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Test Task\"}"

# Toggle completion (replace {id} with actual ID)
curl -X PUT http://localhost:5000/api/tasks/1/toggle

# Get all tasks
curl http://localhost:5000/api/tasks
```
