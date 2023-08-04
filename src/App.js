import React from "react";
import Header from "./components/Header/Header";
import TV from "./components/TV/TV";
import Shows from "./components/Shows/Shows";
import Kids from "./components/Kids/Kids";
import Accordion from "./components/Accordion/Accordion";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <TV />
      <Shows />
      <Kids />
      <Accordion />
      <Footer />
    </div>
  );
};

export default App;