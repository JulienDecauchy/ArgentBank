import React from "react";
import { Route, Routes } from "react-router-dom";

import Accueil from "./Pages/page_accueil/accueil";
import Login from "./Pages/page_login/login";
import User from "./Pages/page_user/user";
import Error404 from "./Pages/page_error404/error404";

import "./style/main.scss"
import { Provider } from "react-redux";
import store from "./Redux/userStore";

function App() {
  return (
    <>
      {/* Defining routes path and rendering components as element */}
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/User" element={<User />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      </Provider>
    </>
  );
}

export default App;
