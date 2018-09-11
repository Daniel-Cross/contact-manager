import React, { Component } from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import TextInputGroup from './textInputGroup';

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

  handleSubmit = (dispatch, e) => {
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
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // clearing state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
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
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
