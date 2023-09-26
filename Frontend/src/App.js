import React from "react";
import { Route, Routes } from "react-router-dom";

import Accueil from "./Pages/page_accueil/accueil";
import Login from "./Pages/page_login/login";
import User from "./Pages/page_user/user";
import Error404 from "./Pages/page_error404/error404";

function App() {
  return (
    <>
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/User" element={<User />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
