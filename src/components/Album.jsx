import React from 'react'

export default function Album(props){

    // get the year from the date
    let year = props.release_date.slice(-4)

    // capitalize the album type
    let albumType = props.album_type.charAt(0).toUpperCase() + props.album_type.slice(1)

    return(
        <section className='album-container'>
            <img className='album-art' src={`public/${props.image_name}`} alt={props.image_name} />
            <h4 className='album-container-text'>{props.name}</h4>
            <p className='album-container-text album-info'>{year} · {albumType}</p>
        </section>
    )
}