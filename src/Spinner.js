import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui bix text loader">
        {props.message}
      </div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;