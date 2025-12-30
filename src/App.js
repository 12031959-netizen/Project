// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Reservations from "./Pages/Reservations";
import Specials from "./Pages/Specials";
import PrivateEvents from "./Pages/PrivateEvents";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminRoute from "./Components/AdminRoute"; // ✅ note lowercase folder name in import below if yours differs
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/private-events" element={<PrivateEvents />} />

            {/* ✅ Admin-only */}
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>

            {/* 404 later */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
