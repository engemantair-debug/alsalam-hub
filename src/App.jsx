import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MobileStickyBar from "./components/MobileStickyBar.jsx";
import Home from "./pages/Home.jsx";
import SubscriptionsPage from "./pages/SubscriptionsPage.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default App;
