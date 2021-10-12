import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "New york",
  country : "America"

};

function Hello(){
  return (
    <div>
      <h1>Welocme to app</h1>
      <p>again hello</p>
    </div>

  )
}

ReactDOM.render(
 <Hello/>
 ,
  document.getElementById('root')
);

