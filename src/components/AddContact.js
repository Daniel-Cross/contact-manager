import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from './textInputGroup';
import axios from 'axios';
import '../styles/AddContact.css';

class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone number is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });
    // clearing state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="AddContact">
              <div className="card mb-3">
                <h1 className="card-header">Add Contact</h1>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={this.handleChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={this.handleChange}
                      error={errors.phone}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange}
                      error={errors.email}
                    />

                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn  btn-dark btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
