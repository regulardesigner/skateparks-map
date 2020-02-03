import React from 'react';

import './App.css';

const Pin = (props) => {

  const { name, condition } = props.infos;
  const { top, left, id } = props;

  const infosCssClass = () => {
    // get all the elements with the .show class
    const show = document.querySelectorAll('.show');
    // get the element width the .park-id class
    const div = document.querySelector(`.park-${id}`);
    // add or remove the .show class on div
    div.classList.toggle('show');
    // remove .show class if exist
    show.length && show.forEach(elem => elem.classList.remove('show'));
  }

  const closeInfoPanel = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.toggle('show');
  }

  return (
    <>
      <div className={`infos park-${id}`}>
        <a href="#close" className="infos-btn-close" onClick={closeInfoPanel}>&#10005;</a>
        <h2>{name}</h2>
        <p>{condition}</p>
      </div>
      <div
        title={name}
        style={{ position: 'absolute', transform: `translate(${left}px, ${top}px)` }}
        className="pin"
        onClick={infosCssClass}
      >{name}</div>
    </>
  )
}

export default Pin;
