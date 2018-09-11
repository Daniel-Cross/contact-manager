import React, { Component } from 'react';
import '../styles/Contact.css';
import { Consumer } from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handleClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleClickDelete = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card card-body mb-3">
                <h4>
                  {name}{' '}
                  <i onClick={this.handleClick} className="fas fa-sort-down" />
                  <i
                    className="fas fa-times"
                    style={{ float: 'right', color: 'red' }}
                    onClick={this.handleClickDelete.bind(this, id, dispatch)}
                  />
                  <Link to={`edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: 'pointer',
                        float: 'right',
                        color: 'black',
                        marginRight: '1rem'
                      }}
                    />
                  </Link>
                </h4>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">{phone}</li>
                    <li className="list-group-item">{email}</li>
                  </ul>
                ) : null}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
