import AdminNavbar from "../Admin/AdminNavbar";
import AdminSidebar from "../Admin/AdminSidebar";
import AdminDashboard from "../Admin/AdminDashboard";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[rgba(17,17,17,255)] dark:text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-64">
        <AdminNavbar />
        <div className="p-4">
          <AdminDashboard />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
