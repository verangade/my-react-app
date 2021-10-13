import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "New york",
  country : "America"

};

const itemList = ['apple','banana','grapes'];

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

function App2(props){
  return(
    <div>
      {props.items.map( item =>( <li>{item}</li>)) }
    </div>
  );
}

ReactDOM.render(
 //<App/>
 <App2 items={itemList}/>,
  document.getElementById('root')
);

