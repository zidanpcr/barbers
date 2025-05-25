import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Services = React.lazy(() => import("./pages/Services"))
const Appointments = React.lazy(() => import("./pages/DataPelanggan"))
const Clients = React.lazy(() => import("./pages/Clients"))
const Error400 = React.lazy(() => import("./pages/Error400"))
const Error401 = React.lazy(() => import("./pages/Error401"))
const Error403 = React.lazy(() => import("./pages/Error403"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

function App() {
  return (
          <Suspense fallback={<Loading />}>
          <Routes>
             <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/400" element={<Error400 />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="*" element={<Error403 />} /> 
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
          </Route>
          </Routes>
          </Suspense>
  );
}

export default App;
