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

ReactDOM.render(
 //<App/>
 //<App2 items={itemList}/>,
 <App3 items={itemObjectList}/>,
  document.getElementById('root')
);

