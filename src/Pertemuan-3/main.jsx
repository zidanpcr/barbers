import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";
import Barbershop from "./Barbershop";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
            <Barbershop/>
        </div>           
    )