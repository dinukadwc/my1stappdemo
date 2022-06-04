import React from 'react'
import './RoundedBtn.css';

function RoundedButton(props) {
  return (
      <div>
        <button className='btn-round'>{props.text}</button>
      </div>
  );
}

export default RoundedButton;