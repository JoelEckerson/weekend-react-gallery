import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {

const [ gallery , setGallery ] = useState([]);

useEffect( ()=>{
  getGallery();
}, []);

    let getGallery = () => {
      console.log('in getGallery')
      axios.get('/gallery')
      .then( (response )=>{
        console.log( 'back from GET with:', response.data )
        setGallery( response.data );
      }).catch((err)=>{
        console.log(err);
        alert( 'your GET says no' );
      }) 
    }

    const addLike = ( id ) => {
      console.log( 'in addLike', id);
      axios.put( '/gallery/like/' + id)
      .then( response => {
        console.log( 'back from PUT with:', response );
        getGallery();
      }).catch( err =>{
        console.log( err );
        alert( 'Your images do not LIKE this' );
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={ gallery } addLike = { addLike } />
      </div>
    );
}

export default App;
