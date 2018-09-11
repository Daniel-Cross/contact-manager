import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: '01',
        name: 'Daniel Cross',
        phone: '07736224134',
        email: 'dan.s.cross@icloud'
      },
      {
        id: '02',
        name: 'Stella Cross',
        phone: '0823762544',
        email: 'stella.cross@icloud'
      },
      {
        id: '03',
        name: 'Ziggy Cross',
        phone: '23874632',
        email: 'ziggy.cross@icloud'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
