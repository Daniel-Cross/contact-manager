import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from './textInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    });
  }

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

    const updateContact = {
      name,
      phone,
      email
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({
      type: 'UPDATE_CONTACT',
      payload: res.data
    });

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
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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

export default EditContact;
