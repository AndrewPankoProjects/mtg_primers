import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Burn from "./pages/Burn";
import ZooDomain from "./pages/ZooDomain";
import UTron from "./pages/UTron";
import MonoRProwess from "./pages/MonoRProwess";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="burn" element={<Burn/>} />
          <Route path="ZooDomain" element={<ZooDomain/>} />
          <Route path="MonoRProwess" element={<MonoRProwess/>} />
          <Route path="UTron" element={<UTron/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
