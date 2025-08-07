import AdminCard from "./AdminCard";
import {
  FaBox,
  FaCog,
  FaShoppingCart,
  FaShoppingBag,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";

const AdminDashboard = () => {
  return (
    <div className="grow p-8">
      <h2 className="text-2xl text-gray-100 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <AdminCard
          icon={<FaShoppingBag size={17} />}
          title="Total Products"
          value="5"
        />
        <AdminCard
          icon={<FaUserGroup size={17} />}
          title="Total Users"
          value="4"
        />
        <AdminCard
          icon={<GrStatusGood size={17} />}
          title="Completed Orders"
          value="3"
        />
        <AdminCard
          icon={<AiOutlineClockCircle size={17} />}
          title="Pending Orders"
          value="20"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
