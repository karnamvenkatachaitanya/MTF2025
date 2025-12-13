# Mega Trade Fair 2025 - Vizianagaram

A full-stack event management platform built with React (Vite) and Django REST Framework.

## Features
- **Frontend**: Modern, Glassmorphism UI using Tailwind CSS & Framer Motion.
- **Backend**: Robust Django API with PostgreSQL (development uses SQLite).
- **Modules**:
    - Exhibitor Directory (Search, Filter, Details)
    - Visitor Registration (QR Code generation)
    - Event Schedule (Timeline)
    - Interactive Admin Dashboard (Django Admin)

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Axios, React Router.
- **Backend**: Django 5, DRF, SimpleJWT, Pillow.

## Setup Instructions

### 1. Prerequisites
- Python 3.10+
- Node.js 18+

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Activate venv:
# Windows: ..\venv\Scripts\activate
# Mac/Linux: source ../venv/bin/activate

pip install -r requirements.txt # (Or install manually: django djangorestframework django-cors-headers Pillow django-filter djangorestframework-simplejwt)
python manage.py migrate
python seed.py # Optional: Load sample data
python manage.py runserver
```
Backend runs at: `http://localhost:8000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173`

## Directory Structure
- `backend/` - Django Project & Apps
- `frontend/` - React Application
- `venv/` - Python Virtual Environment

## API Endpoints
- `GET /api/exhibitors/` - List all exhibitors
- `POST /api/visitors/` - Register a visitor
- `GET /api/events/` - List schedule
