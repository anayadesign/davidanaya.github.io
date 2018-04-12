import React, { Component } from "react";
import Header from "./components/Header";
import Icon from "./components/Icon";
import CopyBlock from "./components/CopyBlock";
import Footer from "./components/Footer";
import content from "./content/home.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header content={content}/>
        <CopyBlock content={content.copy}/>
        <Footer />
      </div>
    );
  }
}

export default App;
