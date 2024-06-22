import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/login";
import { Service } from "./pages/Service";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin_Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";

const App = () =>{
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/>   
          <Route path="contacts" element={<AdminContacts/>}/>
          <Route path="users/:id/edit" element={<AdminUpdate/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
};

export default App;