import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Decore from "../assets/Decore.png";
import {
  NavBar,
  Bookings,
  HomePage,
  Desitnations,
  Flights,
  Hotels,
  Login,
  SignUp,
  LanguageEN,
} from "./index";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${Decore})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
      }}
    >
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/bookings" element={<Bookings />} />
          <Route exact path="/desitnations" element={<Desitnations />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/language" element={<LanguageEN />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
