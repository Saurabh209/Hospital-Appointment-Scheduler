# 🏥 Hospital Appointment Scheduler

A React-based Hospital Appointment Scheduler that allows front desk staff and doctors to manage and view appointments efficiently. Built with React, SCSS, and `react-big-calendar` for scheduling views.

## 🚀 Features

**Role-Based Dashboard**
- Toggle between Front Desk Staff and Doctor roles
- Front desk sees multiple doctor cards and can navigate to a doctor's schedule
- Doctors see their own schedule directly

**Doctor Info Card**
- Displays doctor's avatar, specialty, working hours, contact info, and appointment summary

**Dynamic Calendar**
- Day and week views
- Displays appointments with patient name and type
- Color-coded appointment types for easy recognition
- Current time indicator (red line) in weekly view

**Front Desk Dashboard**
- Lists all doctors with quick access to their schedules
- Improved card design with colors and details

**Responsive Design**
- Fully responsive layout for tablets and mobile devices

**Mock API**
- Local JSON file (`hospitalData.json`) simulating API calls with 50–60 appointments across multiple doctors

**Routing**
- Dynamic routes for each doctor (`/doctor/:name`) using React Router

## 📂 Project Structure

```
hospital-scheduler/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Navbar.scss
│  │  ├─ FrontDeskDashboard.jsx
│  │  ├─ FrontDeskDashboard.scss
│  │  ├─ SingleDoctorAppointments.jsx
│  │  ├─ SingleDoctorAppointments.scss
│  │  ├─ Calander.jsx
│  │  ├─ Calander.scss
│  │  ├─ Footer.jsx
│  │  └─ Footer.scss
│  ├─ context/
│  │  └─ UserRoleContext.jsx
│  ├─ data/
│  │  └─ hospitalData.json
│  ├─ App.jsx
│  ├─ App.scss
│  ├─ App.scss
│  └─ index.jsx
├─ package.json
└─ README.md
```

## 🛠️ Tech Stack

- React 18
- React Router v6
- SCSS for styling
- `react-big-calendar` for appointment scheduling
- `date-fns` for date manipulation

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd hospital-scheduler
```

### 2. Install dependencies

```bash
npm install
npm install -D sass-embedded
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

## 🔧 Usage

- **Switch Roles**: Use the toggle in the navbar to switch between Front Desk and Doctor roles
- **Front Desk Dashboard**: Click on a doctor card to view detailed appointments
- **Doctor View**: See your own schedule with color-coded appointments
- **Dynamic URL**: `/doctor/:name` to view a specific doctor's schedule

## 🖌️ Notes

- App uses a mock JSON file for appointments; no backend
- Also it donest have backend or any authentication so few tings like routes and some data is static.
- Calendar supports day and week views with dynamic events
- Appointment details include patient name, type, and status
- Responsive design ensures usability on mobile devices

## 💡 Future Improvements

- Add login/authentication for roles
- Add CRUD functionality for appointments
- Integrate with a real backend API
- Add export PDF / print schedule functionality