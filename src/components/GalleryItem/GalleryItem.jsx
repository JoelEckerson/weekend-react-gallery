import React from 'react'

function GalleryItem() {
    return (
        <>
            <li>
            <img src={props.item.path}/>
            {props.item.description}
            {props.item.likes}
            </li>  
        </>
    )
}

export default GalleryItem
