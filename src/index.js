import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "New york",
  country : "America"

};

function Lake(props){
  return <h1>{props.name}</h1>;

}

function App(){
  return (
    <div>
    <Lake name='hello how are you'/>
    <Lake name='xxxx'/>
    <Lake name='ppppp'/>
    </div>
  );

}

ReactDOM.render(
 <App/>
 ,
  document.getElementById('root')
);

