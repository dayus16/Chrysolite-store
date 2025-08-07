import Nav from "../pages/nav";
import Footer from "../pages/footer";
import { Outlet } from "react-router-dom";

const UserLayout = ({ input, setInput }) => {
  return (
    <>
      <Nav input={input} setInput={setInput} />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
