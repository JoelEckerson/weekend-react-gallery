import React from 'react'
import {useState} from 'react'

function GalleryItem( props ) {
    const [showImage, setShowImage] = useState(false);

    let displayImage = () => {
        let display = <img onClick = {toggleImage} src={props.path} />
        if( showImage ){
            display = <div onClick = {toggleImage} className='wrapper'>
                <p>{props.description}</p></div>
        }
    }

    let toggleImage = () => {
        setShowImage( !showImage );
    }

    return (
        <>
            <div>
                {displayImage()}
                <p>Likes: {props.likes}</p>
                <button onClick = {() => props.addLike( props.id )}>Like Me</button>
            </div>
        </>
    )
}

export default GalleryItem
