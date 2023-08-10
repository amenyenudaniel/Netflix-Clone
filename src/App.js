import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import TV from "./components/TV/TV";
import Shows from "./components/Shows/Shows";
import Kids from "./components/Kids/Kids";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    alert("Hey Note! This is a clone website");
  });
  return (
    <div>
      <Header />
      <TV />
      <Shows />
      <Kids />

      <Footer />
    </div>
  );
};

export default App;
