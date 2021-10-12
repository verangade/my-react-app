import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "New york",
  country : "America"

};

function Hello(props){
  console.log(Object.keys(props));
  return (
    <div>
      <h1>Welocme to {props.library}</h1>
      <p>{props.message}</p>
      <p>{props.number}</p>
      <p>{Object.keys(props).length}</p>
    </div>

  )
}

ReactDOM.render(
 <Hello library='Ambalangoda' message='hellooooo' number={8}/>
 ,
  document.getElementById('root')
);

