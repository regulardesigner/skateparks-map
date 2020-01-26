import React from 'react';

import './App.css';

const Pin = (props) => {
  //console.log(props);
  const { left } = props;
  const { top } = props;
  return <div style={{ position: 'absolute', transform: `translate(${left}px, ${top}px)`}} className="pin">here</div>
}

export default Pin;
