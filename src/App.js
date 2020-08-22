import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
// personer Attribute hishebe use hoise
  const nayoks = ['Rubel', 'manna', 'deluwar']

// 32.8 product akta arrray r vitore object
  const product =[
    {name: 'Photoshop', price:'$230'},
    {name: 'Illustrator', price:'$120'}
  ]

  const childs =[
    {name: 'john', roll: 21},
    {name: 'Smith', roll: 120}
  ]



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        {/* Product Component Call korlam */}
        <Product pName={product[0].name} price={product[0].price}></Product>
        <Product pName={product[1].name} price={product[1].price}></Product>

        {/* Student Component */}
        <Student cName={childs[0]} cRoll={childs[0]} ></Student> 
        <Student cName={childs[1]} cRoll={childs[1]} ></Student> 

        {/* Person Component Call korlam */}
        <Person name={nayoks[0]} job='Actor'></Person>



      </header>
    </div>
  );
}


// Product Component

function Product(props){
  console.log(props);
  let productStyle ={
    border: '2px solid gray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    
  }

  return(
    <div style={productStyle}>
      <h2>{props.pName}</h2>
      <h3>{props.price}</h3>
      <button>BUY</button>

    </div>

  )
}


//Student Component  (same as product) just student array theke differently data neya hoise

function Student(props){ 
  let studentStyle ={
    border: '3px solid red',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    
  }

  return(
    <div style={studentStyle}>
      <h1>{props.cName.name}</h1>
     <h3>{props.cRoll.roll}</h3>

    </div>
  )

}











// Person Component

function Person(props){

  let newBorder = {
    border: '2px solid red',
    margin: '10px'
  }

  return(
    <div style={newBorder}>
      <h1>Name: {props.name} </h1>
      <p style={{border: '2px solid yellow', borderRadius: '10px', margin: '10px'}}>Job: {props.job} </p>
    </div>

  )
}

export default App;
