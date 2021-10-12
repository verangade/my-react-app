import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(React.createElement('ul',{style: {color:"blue"}},
  React.createElement('li',null,'Orange'),
  React.createElement('li',null,'Apple'),
  React.createElement('li',null,'Grapes'),
  
  )
 ,
  document.getElementById('root')
);

