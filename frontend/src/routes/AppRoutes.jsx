import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Landing from "../pages/Landing";
import Companies from "../pages/Companies";
import Jobs from "../pages/Jobs";
import Salaries from "../pages/Salaries";
import Reviews from "../pages/Reviews";
import Interviews from "../pages/Interviews";
import ClaimCompany from "../pages/ClaimCompany";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/interviews" element={<Interviews />} />
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
