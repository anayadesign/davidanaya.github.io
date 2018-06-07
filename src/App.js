import React, { Component } from 'react';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Footer from './components/Footer/Footer';
import content from './content/home.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header content={content.header} />
        <main className="App--content">
          <Paragraph content={content.copy} />
        </main>
        <Footer content={content.footer} />
      </div>
    );
  }
}

export default App;
