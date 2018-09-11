import React, { Component } from 'react';
import Contacts from './Contacts';
import Navbar from './Navbar';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from '../context';
import AddContact from './AddContact';

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar title="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
