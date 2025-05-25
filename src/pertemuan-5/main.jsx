import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="flex h-screen bg-gray-100">
    <Sidebar />
    <div id="main-layout" className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1 p-6 bg-gray-50 overflow-y-auto space-y-6">
        <Dashboard />
      </main>
    </div>
  </div>
);
