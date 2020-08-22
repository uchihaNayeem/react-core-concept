import React, { useState, useEffect } from 'react';
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

  const worker =[
    {name: 'dicosta', number: 2},
    {name: 'Rozario', number: 5},
  ]

  const employee = [
    {id: 21, unit: 'two'},
    {id: 31, unit: 'three'},
  ]

  // 32.8 destructing
  let productOne = [
    {name: 'Photoshop', price: '$25'},
    {name: 'Illustrator', price: '$15'},
  ]

  let hokage = ['kajeKage', 'RaiKage', 'HoshiKage', 'MijuKage']
 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        <Users></Users>
        {/* 32.9 */}
        
        <ul>
          {
            hokage.map(n => <li>{n}</li>)
          }
          {
            productOne.map(n => <li>{n.name}</li> )
          }
        </ul>

        {
          productOne.map(n => <ProductOne productObject={n}></ProductOne>)
        }




        {/* Product Component Call korlam */}
        <Product pName={product[0].name} price={product[0].price}></Product>
        <Product pName={product[1].name} price={product[1].price}></Product>
        {/* 32.8 destructuring */}
        <ProductOne productObject={productOne[0]}></ProductOne>

        {/* Student Component */}
        <Student cName={childs[0]} cRoll={childs[0]} ></Student> 
        <Student cName={childs[1]} cRoll={childs[1]} ></Student> 

        <Employee eId={worker[0]} eNum={worker[0]}></Employee>
        

        {/* Person Component Call korlam */}
        <Person name={nayoks[0]} job='Actor'></Person>





      </header>
    </div>
  );
}

// 32.12
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(jsonData => setUsers(jsonData));
  })

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        console.log(users)
      }
      {
        users.map(user => <li>{user.email}</li>)
      }
      
    </div>
  )
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

// 32.8 destructuring component
function ProductOne(props){
  let pProps = props.productObject 

  let productOneStyle={
    border: '3px dotted red',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    margin: '10px'
  }
  const {name, price} = props.productObject
  console.log(name, price);
  return(
    <div style={productOneStyle}>
      <h1>{name}</h1>
    <h3>{price}</h3>
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

function Employee(props){
  
  let employeeStyle ={
    border: '5px solid green',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    backgroundColor: 'lightgray',
    
  }
 
  return(
    <div style={employeeStyle}>
      <h1>{props.eId.name}</h1>
      <h3>{props.eNum.number}</h3>
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
