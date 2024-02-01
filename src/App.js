import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/TourList";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}
export default App;
