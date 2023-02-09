import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<>About</>} />
        <Route path="/products" element={<>products</>} />
        <Route path="/solutions" element={<>solutions</>} />
        <Route path="/blog" element={<>blog</>} />
        <Route path="/contact" element={<>Contact</>} />
        <Route path="/support" element={<>support</>} />
        <Route path="/cart" element={<>cart</>} />
        <Route path="/login" element={<>login</>} />
      </Routes>
    </BrowserRouter>
  );
};
//#002b6e blue
//#fefffe white
//#b38b53 gold

export default Router;
