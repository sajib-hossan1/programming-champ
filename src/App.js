import React from "react";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Discount from "./components/Discount/Discount";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Mentors from "./components/Mentors/Mentors";

function App() {
  return (
    <>
        <Banner/>
        <Features/>
        <Courses/>
        <Discount/>
        <Faq/>
        <Mentors/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
