import React, { Component } from 'react';
import '../styles/Contact.css';
import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handleClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleClickDelete = (id, dispatch) => {
    console.log(id);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="Contact">
              <div className="card card-body mb-3">
                <h4>
                  {name}{' '}
                  <i onClick={this.handleClick} className="fas fa-sort-down" />
                  <i
                    className="fas fa-times"
                    style={{ float: 'right', color: 'red' }}
                    onClick={this.handleClickDelete.bind(this, id, dispatch)}
                  />
                </h4>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">{phone}</li>
                    <li className="list-group-item">{email}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
