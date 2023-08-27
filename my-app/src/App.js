import React from "react";
import Navbar from "./component/Navbar";
import {  Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>Thapa Technical Home Page</h1>
      </section>
    </>
  ) ;
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>


      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Routes>
    </>
  );
};

export default App;