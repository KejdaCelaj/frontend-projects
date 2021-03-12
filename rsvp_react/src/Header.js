import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return(
        <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={props.newGuestSubmitHandler}>
            <input type="text" onChange={props.handleNameInput} value={props.pendingGuests} placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
    )
}

Header.propTypes = {
    // handleNameInput: PropTypes.func.isRequired,
    // pendingGuests: PropTypes.string.isRequired,
}

export default Header;
