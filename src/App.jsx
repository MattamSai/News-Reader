import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import React, { createContext } from "react";
import Test from "./components/test";
import NavBar from "./components/Navbar";
import { useState} from "react";

export const SearchContext = createContext();
function App() {
  const[searchString,setSearchString]=useState();

 
  return (
    <>
        {/* <NavBar setSearchString={setSearchString}/> */}
        <NavBar setSearchString={setSearchString}/>
        <Router basename="/">
 
    <Routes>
      {/* <Route path="/Home" element={<Home searchString={searchString}/>} /> */}
      <Route path="/news-feed" element={<Test searchString={searchString}/>} />
    </Routes>
    <Footer/>
  </Router>
    </>
  );
}
export default App;
