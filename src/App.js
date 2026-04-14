import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Testimonial />
            <Contact />
            
          </>
        } />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}