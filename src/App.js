import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Desprenoi from "./pages/desprenoi";
import Home from "./pages/home";
import Preturi from "./pages/preturi";
import Galerie from "./pages/galerie";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact";
import Rezervare from "./pages/rezervare";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<Desprenoi />} />
            <Route path="/preturi" element={<Preturi />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/rezervare" element={<Rezervare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
