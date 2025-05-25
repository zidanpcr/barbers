import { createRoot } from "react-dom/client";
import "./tailwind.css";
import AdminCustomerList from "./AdminCustomerList";

createRoot(document.getElementById("root")).render(
  <div>
    <AdminCustomerList />
  </div>
);
