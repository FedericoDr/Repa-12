import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import Error404 from '../E404/Error404';
import Register from '../Register/Register';
import Users from '../Users/Users';

const Router = () => {
  const [user, setUSer] = useState(null)//guardar el id aca y luego transportarlo a los otros sitios
  return <>


    {/*<Header/>*/}
    <Routes>
      <Route path="/Login" element={<Login setUSer={setUSer} />} />
      <Route path="/Register" element={<Register setUSer={setUSer} />} />
      <Route path="/Home" element={<Home user={user} />} />{/* le pasamos user ya que guarda el id */}
      <Route path="/Users" element={<Users />} />
      <Route path="/Error404" element={<Error404 />} />
      <Route path="*" element={<Navigate to="/Error404" />} />
    </Routes>
    {/*<Footer/>*/}

  </>
}


export default Router