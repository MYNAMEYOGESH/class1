// react  functional component
// import -> labrary , const, methods, controllers, modules
//  1. default impoir -> modules, labrary
// 2. const imports  -> const, methods, controllers, labrary (typed/named) { }

import React from "react";
import "./App.css"
import Home from "./component/Home";
import Contact from "./component/contact";

// component body (jsx)

function App(props) {
  return (
    <div>
      <h1 className="title"> React function component </h1>
      <Home/>
      <Contact/>
    </div>
  )
}

//export -> default & cpnst
export default App