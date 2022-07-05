import React from "react";
import Banner from "./components/Banner/Banner";
import Courses from "./components/Courses/Courses";
import Discount from "./components/Discount/Discount";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
        <Banner/>
        <Features/>
        <Courses/>
        <Discount/>
    </>
  );
}

export default App;
