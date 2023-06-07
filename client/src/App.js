import { BrowserRouter } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
const App = observer(() => {
  const { user } = useContext(Context)


  useEffect(() => {
    if ((localStorage.getItem('token') !== null)) {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      })
    }
    return;
  }, [])



  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
