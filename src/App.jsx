import { useState } from "react";
import Nav from "./pages/nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./components/store";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/footer";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Provider store={store}>
          <Nav input={input} setInput={setInput} />
          <Routes>
            <Route path="/" element={<Home input={input} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
