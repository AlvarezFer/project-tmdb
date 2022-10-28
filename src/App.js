import React from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Ingreso from "./components/Ingreso";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import SelectMovie from "./components/SelectMovie";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ingreso />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<SelectMovie />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
