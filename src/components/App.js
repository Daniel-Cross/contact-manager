import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import Navbar from './Navbar';
import About from './About';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from '../context';
import AddContact from './AddContact';
import NotFound from './NotFound';
import EditContact from './EditContact';

class App extends Component {
  state = {};
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar title="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
