import React, {Component} from 'react';
import PropTypes from 'prop-types'

const Invities = props => {
    return(
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"
              onChange={props.toggleFilter}
              checked={props.isFiltered}
            /> Hide those who haven't responded
          </label>
        </div>
    )
}

Invities.propsTypes={
  toggleFilter: PropTypes.func.isRequired
}

export default Invities;