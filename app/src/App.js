import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import SightingForm from "./SightingForm";
import Species from "./Species";

// import Tasks from "./Tasks";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="form">Form</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addform" element={<Form />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    {/* <Tasks /> */}
    <Species />
  </>
);

const Form = () => (
  <>
    <h1>Form</h1>
    {/* <SightingForm /> */}
  </>
);

export default App;
