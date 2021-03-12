// import './App.css';
import React, { Component } from 'react';
import GuestList from './GuestList';
import Counter from './Counter';
import Header from './Header';
import Invities from './Invites';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuests: '',
    guests: []
  }

  lastGuestId = 0;
  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestPropertyAt = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if(id === guest.id){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = id =>{
    this.toggleGuestPropertyAt('isConfirmed', id)
  }

  removeGuestAt = id => {
    this.setState({
      //use filter method to remove user from the array using the id
      guests: this.state.guests.filter(guest => id != guest.id)
    })
  }

  toggleEditingAt = id =>{
    this.toggleGuestPropertyAt('isEditing', id)
  }

  setNameAt = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if(id === guest.id){
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    })
  }

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

  //get name from input 
  handleNameInput =e =>
    this.setState({ pendingGuests: e.target.value })

  newGuestSubmitHandler = e => {
    //prevent forms default behavior
    e.preventDefault();
    //assign a new id
    const id = this.newGuestId();
    this.setState({
      guests: [
        //add the pending guest at the beginning of the guests array
        {
          name: this.state.pendingGuests,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      //reset pending guests
      pendingGuests: ''
    })
  }

  getTotalInvited = () => this.state.guests.length;
  //use reduce to get number of attending guest because we need a value returned instead  of an array
  getAttendingGuests = () => 
    this.state.guests.reduce((total, guest) =>
      guest.isConfirmed ? total + 1 : total,
      0
    )

  render(){
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
      <Header  
      handleNameInput={this.handleNameInput}
      pendingGuests={this.state.pendingGuests}
      newGuestSubmitHandler = {this.newGuestSubmitHandler}
      />
      <div className="main">
        <Invities toggleFilter={this.toggleFilter} check={this.state.isFiltered}/>
        <Counter 
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
        />
        <GuestList 
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        isFiltered={this.state.isFiltered}
        removeGuestAt={this.removeGuestAt}
        pendingGuests={this.state.pendingGuests} />
      </div>
    </div>
    );
  };
}

export default App;
