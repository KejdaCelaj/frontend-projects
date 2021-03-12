import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
    return (
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>{props.numberAttending}</td>
              {/* {props.attending} */}
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>{props.numberUnconfirmed}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{props.totalInvited}</td>
            </tr>
          </tbody>
        </table>
    )
}

Counter.propTypes = {
  numberAttending: PropTypes.func.isRequired,
  numberUnconfirmed: PropTypes.func.isRequired,
  totalInvited: PropTypes.func.isRequired
}

export default Counter;