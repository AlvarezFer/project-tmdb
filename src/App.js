import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import SelectMovie from "./components/SelectMovie";
import AuthContext from "./context/AuthContext";
import NotFound from "./components/NotFound";
import ThemeContext from "./context/ThemeContext";
import DarkVariantExample from "./components/Carousel";
import Favorites from "./components/Favorites";

import "././global.css";

const App = () => {
  return (
    <>
      <AuthContext>
        <ThemeContext>
          <Routes>
            <Route path="/" element={<DarkVariantExample />}></Route>

            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/favorites" element={<Favorites />}></Route>
            <Route path="/movies/:movieId" element={<SelectMovie />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeContext>
      </AuthContext>
    </>
  );
};

export default App;
