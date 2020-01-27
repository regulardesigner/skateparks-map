import React from 'react';

import './App.css';

const Pin = (props) => {

  const { name, condition } = props.infos;
  const { top, left, id } = props;

  const infosCssClass = () => {
    const show = document.querySelectorAll('.show');
    const div = document.querySelector(`.park-${id}`);
    div.classList.toggle('show');
    if (show.length > 0) {
      show.forEach(elem => elem.classList.remove('show'))
    }
  }

  return (
    <>
      <div className={`infos park-${id}`}>
        <h2>{name}</h2>
        <p>{condition}</p>
      </div>
      <div
        style={{ position: 'absolute', transform: `translate(${left}px, ${top}px)` }}
        className="pin"
        onClick={(e) => { infosCssClass() }}
      >here</div>
    </>
  )
}

export default Pin;
