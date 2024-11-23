# Project Management App (Jira Clone)

A modern, full-stack project management application built with Next.js, offering Jira-like functionality for managing projects, sprints, and issues.

## 🚀 Features

### Authentication & Authorization

- Secure user authentication powered by Clerk
- Sign in with Google
- Email/Password authentication
- Protected routes and API endpoints

### Organization Management

- Create and manage organizations
- Invite team members via email
- Role-based access control
- Organization settings and preferences

### Project Management

- Create multiple projects within an organization
- Customize project settings
- Project overview dashboard
- Team member management at project level

### Sprint Planning

- Create time-boxed sprints with start and end dates
- Sprint planning and backlog management
- Sprint status tracking (Not Started, Active, Completed)
- Sprint velocity and burndown charts

### Issue Tracking

- Create and manage issues within sprints
- Issue properties include:
  - Title and description
  - Priority levels
  - Assignee management
  - Status tracking
  - Comments and attachments
- Issue statuses:
  - Todo
  - In Progress
  - Review
  - Testing
  - Done
- Status transitions locked until sprint activation

### User Interface

- Clean and modern interface using ShadcN UI
- Responsive design for all devices
- Drag-and-drop issue management
- Real-time updates
- Sprint selection dropdown
- Filtered issue views based on sprint selection

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**:
  - Tailwind CSS
  - ShadcN UI Components
- **Authentication**: Clerk
- **Database**: NeonDB (PostgreSQL)
- **ORM**: Prisma
- **State Management**: React Context/Zustand
- **Deployment**: Vercel
