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

function Department(){
  return(<div><h1>This is a department</h1></div>);
} 

function Market(){
  return(<h1>This is a market</h1>);
} 

function App5(props){
 
      if(props.value === "dep"){
        return <Department/>;
      }else if(props.value === 'market'){
        return <Market/>;
      }
    
  
}

ReactDOM.render(
 //<App/>
 //<App2 items={itemList}/>,
 //<App3 items={itemObjectList}/>,
 //<App4 items={numberArray}/>,
 <App5 value="dep"/>,
  document.getElementById('root')
);

