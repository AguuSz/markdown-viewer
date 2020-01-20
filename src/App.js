import React from 'react';
import './App.css';

//Import de componentes
import Header from './components/utils/header/header';
import Homepage from './components/homepage/Homepage';
import About from './components/About/about';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header className="success" marca="Markdown Parser" />
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
      </Router>
    )
  }
}

export default App;
