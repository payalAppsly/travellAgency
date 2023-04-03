import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import RootBack from "../assets/RootBack.png";
import {
  NavBar,
  Bookings,
  HomePage,
  Destinations,
  Flights,
  Hotels,
  Login,
  SignUp,
  SelectLanguage,
} from "./index";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div
      className="container mx-auto"
      // className={classes.root}
      style={{
        backgroundImage: `url(${RootBack})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        border: "1px solid black",
      }}
    >
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/bookings" element={<Bookings />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/language" element={<SelectLanguage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
