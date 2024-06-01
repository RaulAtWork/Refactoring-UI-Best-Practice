import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Elements from "./pages/Elements";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/gallery" Component={Gallery}></Route>
          <Route path="/showcase" Component={Elements}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
//TODO not found page!
export default App;
