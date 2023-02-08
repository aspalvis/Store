import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<>About</>} />
        <Route path="/contact" element={<>Contact</>} />
        <Route path="/login" element={<>login</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
