import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "New york",
  country : "America"

};

const itemList = ['apple','banana','grapes'];

const itemObjectList = [
  { id:"1" , name: "Apple" , color: "Red"},
  { id:"2" , name: "Mango" , color: "Green"},
  { id:"3" , name: "Grapes" , color: "Purple"}
];

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

function App3({items}){
  return(
    <div>
      {items.map( item =>( <div key={item.id} ><div>{item.id} Fruit {item.name} </div>
      <div> Color : {item.color} </div></div>)) }
    </div>
  );
}

//how to add key to number of array
const numberArray = [1,2,3,4,8,9]

function App4({items}){
  return(
  <div>{items.map( item => <li key={item.toString()}>{item}</li>)}</div>
  );
}

ReactDOM.render(
 //<App/>
 //<App2 items={itemList}/>,
 //<App3 items={itemObjectList}/>,
 <App4 items={numberArray}/>,
  document.getElementById('root')
);

