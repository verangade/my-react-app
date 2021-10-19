import React ,{useState} from 'react';
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

function Department({name}){
return(<div><h1>This is a department : {name}</h1></div>);
} 

function Market({name }){
return(<h1>This is a market : {name}</h1>);
} 

function App5(props){
 
      if(props.value === "dep"){
        return <Department name='hello'/>;
      }else if(props.value === 'market'){
        return <Market name='xxx'/>;
      }
  
}

function App6(props){
  return(
    <div>
      {props.value=== "dep" ? (<Department name="hikz"/>) : 
      props.value === "mar" ?  (<Market name ="ape market" /> ) : (<p>Please enter value</p>) }
    </div>
  );
}

function Apple(){
  return(<h1>I am Apple</h1>);
}

function Orange(){
  return(<h1>I am Orange</h1>);
}

function App7(){
  return(
    <div>
     <Apple/>
     <Orange/>
    </div>
  );

}

const snacks = ["chips","chocobar","biscuits"];
const [m1,m2,m3] = ["car","van","lorry"];
console.log(snacks[1]);
console.log(m1);

function App8(){

  const [status ,setStatus] = useState("Opensss");
  const [employee,setEmployee] = useState("jhon Doe");
  const [animal,setAnimal] = useState("Jiraff");
  const [year,setYear] = useState("1");
  return(
    <>
      <div>
          <h1>Status : {status} </h1>
          <button onClick={ () => setStatus("Open") }> Open</button>

          <button onClick={ () => setStatus("Close") }>Close</button>
      </div>
      <div>
         <h1>Employee : {employee} </h1>
          <button onClick={ () => setEmployee("Jane Doe") }>Employee</button>
      </div>
      <div>
         <h1>Year : {year} </h1>
          <button onClick={ () => setYear(year +1) }>Employee</button>
      </div>
      <div>
         <h1>Animal : {animal} </h1>
          <button onClick={ () => setAnimal("Lion") }>Employee</button>
      </div>
    </>
  );

}


ReactDOM.render(
 //<App/>
 //<App2 items={itemList}/>,
 //<App3 items={itemObjectList}/>,
 //<App4 items={numberArray}/>,
 //<App7 />,
 //<><Orange/> <Apple/></>,

  <App8/>,
  document.getElementById('root')
);

