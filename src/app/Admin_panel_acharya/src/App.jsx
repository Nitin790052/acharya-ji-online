import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import AllUsers from "./pages/userManagment/AllUsers";
import NewRegistrations from "./pages/userManagment/NewRegistrations";
import UserDetailPage from "./pages/userManagment/UserDetailPage";
import ActiveUsers from "./pages/userManagment/ActiveUsers";
import BlockedUsers from "./pages/userManagment/BlockedUsers";
import PagePlaceholder from "./pages/PagePlaceholder";
import CategoryManager from "./pages/vendors/CategoryManager";
import NavbarManager from "./pages/content/NavbarManager";
import CarouselManager from "./pages/content/CarouselManager";

function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Route */}
        <Route index element={<Login />} />

        {/* Protected Routes - Layout wraps all dashboard pages */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          {/* Dashboard - Default route */}
          <Route index element={<Dashboard />} />
          
          {/* ... existing routes ... */}
          <Route path="users/all" element={<AllUsers />} />
          <Route path="users/new-registrations" element={<NewRegistrations />} />
          <Route path="users/detail" element={<UserDetailPage />} />
          <Route path="users/active" element={<ActiveUsers />} />
          <Route path="users/blocked" element={<BlockedUsers />} />
          <Route path="vendors/category/:categoryType" element={<CategoryManager />} />
          <Route path="vendors/all" element={<PagePlaceholder title="All Vendors" />} />
          <Route path="vendors/pending" element={<PagePlaceholder title="Pending Approvals" />} />
          <Route path="vendors/approved" element={<PagePlaceholder title="Approved Vendors" />} />
          <Route path="vendors/earnings" element={<PagePlaceholder title="Vendor Earnings" />} />
          <Route path="content/navbar" element={<NavbarManager />} />
          <Route path="content/blogs" element={<PagePlaceholder title="Blogs Management" />} />
          <Route path="content/testimonials" element={<PagePlaceholder title="Testimonials" />} />
          <Route path="content/carousels" element={<CarouselManager />} />
          <Route path="content/services" element={<PagePlaceholder title="Services Management" />} />
          <Route path="content/faq" element={<PagePlaceholder title="FAQ Management" />} />
          <Route path="seo/settings" element={<PagePlaceholder title="SEO Settings" />} />
          <Route path="seo/meta" element={<PagePlaceholder title="Meta Tags Management" />} />
          <Route path="admin/staff" element={<PagePlaceholder title="Staff Management" />} />
          <Route path="admin/settings" element={<PagePlaceholder title="General Settings" />} />
          <Route path="admin/password" element={<PagePlaceholder title="Change Password" />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AdminApp;