import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Landing from "../pages/Landing";
import Companies from "../pages/Companies";
import Company from "../pages/Company";
import Jobs from "../pages/Jobs";
import JobDetail from "../pages/JobDetail";
import Salaries from "../pages/Salaries";
import ClaimCompany from "../pages/ClaimCompany";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Company Discovery & Central Company Architecture */}
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="/company/:id/:tab" element={<Company />} />

        {/* Jobs: Board & Dedicated Detail Page */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />

        {/* Salary Explorer */}
        <Route path="/salaries" element={<Salaries />} />

        {/* Redirects */}
        <Route path="/reviews" element={<Navigate to="/companies" replace />} />
        <Route path="/interviews" element={<Navigate to="/companies" replace />} />

        {/* Employer Claim & User Account */}
        <Route path="/claim-company" element={<ClaimCompany />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
