import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: 'mahfuz',
    job: 'ATN Singer',
    ocupassion: 'Bussiness'
    
  }
  let personTwo = {
    name: 'Eva Rahman',
    job: 'Singer',
    ocupassion: 'singer'
    
  }

  let cssStyle={
    color: 'red',
    backgroundColor: 'white'

  }

  
  const nayoks = ['Rubel', 'manna', 'deluwar']
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
{/* 
        <p>I've started to learn REACT on 21st August, 2020...</p>
        <p>react emmet installed</p>
        <h1>Math: {(12+12)}</h1>
        <h1 style={cssStyle} >Name: {person.name}</h1>
        <h1>Job & ocupassion: {person.job + ' ' + person.ocupassion}</h1>

        <h3 style={{backgroundColor: 'blue'}}>Name: {personTwo.name}</h3>
        <h3 style={{backgroundColor: 'blue'}}>Name: {personTwo.name}</h3>
         */}
        
        <Person name={nayoks[0]} femaleName='Mousumi'></Person>
        <Person name='Razzak' femaleName='Sabnoor'></Person>
        <Person name='Manna' femaleName='Sucanda'></Person>
        
        
      </header>
    </div>
  );
}

function Person(props){

  console.log(props);

  let borderYellow = {
    border: '2px solid yellow',
    margin: '10px'
  }



  return (
  <div style={{border: '2px solid red', margin: '10px'}}>
  <h1 style={borderYellow} >Name: {props.name}</h1>

  <h3>Nakiya: {props.femaleName}</h3>
  </div>
  )
}

export default App;
