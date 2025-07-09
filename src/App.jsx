import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

 

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Appointments = React.lazy(() => import("./pages/DataPelanggan"))
const Ulasan = React.lazy(() => import("./pages/Ulasan"))
const Clients = React.lazy(() => import("./pages/Clients"))
const Blog = React.lazy(() => import("./pages/Blog"))
const BlogDetail = React.lazy(() => import("./pages/BlogDetail"))
const Products = React.lazy(() => import("./pages/Products"))
const ProductForm = React.lazy(() => import("./pages/ProductForm"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const Reviews = React.lazy(() => import("./pages/Reviews"))
const BlogForm = React.lazy(() => import("./pages/BlogForm"))
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
            <Route path="/products" element={<Products />} />
            <Route path="/datapelanggan" element={<Appointments />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogDetail/>}/>
            <Route path="/blogform" element={<BlogForm/>}/>
            <Route path="/400" element={<Error400 />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="*" element={<Error403 />} />
            <Route path="/productform" element={<ProductForm />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/reviews" element={<Reviews />} />

  <Route path="/ulasan" element={<Ulasan />} />

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
