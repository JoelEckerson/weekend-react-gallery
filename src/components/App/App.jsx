import React from 'react';
import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {

const [ gallery , setGallery ] = useState([]);

useEffect( ()=>{
  getGallery();
}, []);

let getGallery = () => {
  console.log('in gallery').then( (response )=>{
    console.log( 'back from GET with:', response.data )
    setGallery( response.data );
  }).catch((err)=>{
    console.log(err);
    alert( 'your GET says no' );
  }) 
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <p>{JSON.stringify(gallery)}</p>
        // <ul>
        //   { gallery.map( ( item, index ) => <li>{gallery.name}</li>)}
        // </ul>
      </div>
    );
}

export default App;
