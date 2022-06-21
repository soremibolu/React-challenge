import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./global.css"

/**
 * The starting page for your App
 */

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
                <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/Details"} element={<Details />} />
                </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>

    );
  }
}

export default App;