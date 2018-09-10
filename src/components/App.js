import React, { Component } from 'react';
import Contact from './Contact';
import Navbar from './Navbar';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar title="Contact Manager" />
        <div className="container">
          <Contact
            name="Daniel Cross"
            phone="07736224134"
            email="dan.s.cross@icloud.com"
          />
          <Contact
            name="Stella Cross"
            phone="00000000000"
            email="stella.s.cross@icloud.com"
          />
        </div>
      </div>
    );
  }
}

export default App;
