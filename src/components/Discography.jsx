import React from 'react'
import Album from './Album'
import data from '../../data.js'

let singleElements = data.map((album)=> {
    if(album.album_type == 'single'){
        return <Album key={album.id} {...album} /> 
    }
})

let albumElements = data.map((album) => {
    if(album.album_type == 'album'){
        return <Album key={album.id} {...album} /> 
    }
})

export default function Discography(){
    return(
        <section>
            <div className='row'>
                <h2>Singles</h2>
                <div className='discography-display'>{singleElements}</div>
            </div>
            <div className='row'>
                <h2>Albums</h2>
                <div className='discography-display'>{albumElements}</div>
            </div>
        </section>
    )
}