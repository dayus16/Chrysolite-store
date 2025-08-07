import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/store";
import { Toaster } from "react-hot-toast";

// Layouts
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import AdminHome from "./Admin/AdminHome";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          {/* User Routes */}
          <Route element={<UserLayout input={input} setInput={setInput} />}>
            <Route path="/" element={<Home input={input} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminHome />} />

            {/* Add more admin routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
