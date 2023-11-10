import React from "react";
import { Route, Routes } from "react-router-dom";

import Accueil from "./Pages/page_accueil/accueil";
import Login from "./Pages/page_login/login";
import User from "./Pages/page_user/user";
import Error404 from "./Pages/page_error404/error404";

import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

import "./style/main.scss"
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/userStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      {/* Defining routes path and rendering components as element */}
      <Provider store={store}>
        <React.StrictMode>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Profile" element={<User />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </PersistGate>
        </React.StrictMode>
      </Provider>
    </>
  );
}

export default App;
