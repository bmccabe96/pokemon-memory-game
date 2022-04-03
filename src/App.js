import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main";

//TESTING, THIS WILL BE IN MAIN LATER...
import { Card } from "./components/pokemon/Card";


function App() {
  return (
    <div className="all-content">
      <Header />
      <Card />
      <Main />
      <Footer />
    </div>
  )
}

export default App;


