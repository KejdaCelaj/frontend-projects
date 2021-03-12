import React, {Component} from 'react';
import PropTypes from 'prop-types';

const PendingGuests = props =>{
    //only render element if there is text in the form field
    if(props.name){
        return(
            <li className='pending'>
                <span>
                    {props.name}
                </span>
            </li>
        );
    }
    return null;
}

PendingGuests.propTypes = {
    name: PropTypes.string.isRequired
}

export default PendingGuests;