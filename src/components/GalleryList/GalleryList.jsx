import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ){
    return(
        <>
            <ul>
            { props.gallery.map( image => <GalleryItem key = { image.id } description = { image.description } path = {image.path} id = {image.id} likes = { image.likes } addLike = { props.addLike } /> )}
            </ul>
        </>
    )
}

export default GalleryList