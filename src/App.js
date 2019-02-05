import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 1500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default App;
