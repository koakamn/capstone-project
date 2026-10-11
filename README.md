# StayHealthy — Telehealth Frontend Capstone

A responsive React frontend prototype for a fictional non-profit telehealth platform. StayHealthy helps patients find doctors and request appointments, manage their profile, and leave reviews.

## Features
- Responsive navigation with Home, Appointments, Sign Up, Login, and logout state.
- Sign-up and login forms prepared to call configurable backend API endpoints.
- Doctor search and appointment booking forms.
- App-wide notification component.
- Review form with submit/disabled behavior.
- Profile card and edit form.
- Doctor appointment card with cancellation behavior.
- SEO metadata in `index.html`.

## Requirements
- Node.js 18+ and npm
- A backend implementing `POST /api/register` and `POST /api/login` for real authentication. The UI falls back to a demo mode when the API is unavailable.

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production output is written to `dist/`.

## API configuration
Set `VITE_API_BASE_URL` in `.env` to your backend base URL. Do not store secrets in frontend environment variables.

## Screenshots
See [`screenshots/`](./screenshots/) for design and launch evidence. Replace the illustrative launch screenshot with a real browser screenshot after deploying the app.

## Important
This is a frontend capstone scaffold. No real patient data or medical advice is provided. The patient report included with this project uses fictional sample data only.
