# Expense_Tracker_Project

Building an Expense Tracking system with a NuxtJS frontend (using Vue.js and Tailwind CSS) and a Laravel API backend with PostgreSQL

## Progress Update

- setup all main services, (frontend, nginx, auth, backend)

## Project Overview

**Goal**: Create an Expense Tracking system where users can:

- Add, edit, delete, and view expenses.
- Categorize expenses (e.g., Food, Travel, Bills).
- View summaries (e.g., total expenses by category or month).
- Optionally, include authentication for user-specific data.

**Tech Stack**:

- **Frontend**: NuxtJS (Vue.js) with Tailwind CSS for styling.
- **Backend**: Laravel API with PostgreSQL for data storage.
- **Data Flow**: PostgreSQL (database) → Laravel Eloquent (models) → Laravel API endpoints → Nuxt server (Backend for Frontend) → Vue components (client-side rendering or server-side fetching).

## Initial Setup

- Setup directory in `expense_tracker_project\` there are `frontend\` and `backend\`

- In `backend\` installed Laravel `composer create-project laravel/laravel .`
- Install and create database in Postgresql named `expense_tracker_db`
  Configure Laravel `.env` to connect to database

- In `frontend/` installed NuxtJS `npx nuxi@latest init .`
  Install dependencies `npm install`
