/* eslint-disable react/no-string-refs */
import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };
  }
  submitPlayer(event) {
    event.preventDefault;
    axios
      .post('http://localhost:4000/players', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email 
      })
      .then((response) => { 
        console.log(response);
      })
      .catch(console.error);

  }
  render() { 
    return ( 
      <div className="PlayerForm row">
        <h1 className="center">Add a New Player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input 
                id="firstName" 
                type="text" 
                onChange={ev => this.setState({firstName: ev.target.value})}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input 
                id="lastName" 
                type="text"
                onChange={ev => this.setState({lastName: ev.target.value})}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input 
                id="phone" 
                type="text" 
                onChange={ev => this.setState({phone: ev.target.value})}
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input 
                id="email" 
                type="text" 
                onChange={ev => this.setState({email: ev.target.value})}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}
 
export default PlayerForm;