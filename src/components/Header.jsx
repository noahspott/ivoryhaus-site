import React from 'react'
import ivoryhausLogo from '../assets/ivoryhaus-logo.png'

export default function Header(){
    return(
        <header>
            <img className='logo' src={ivoryhausLogo} alt="" />
        </header>
    )
}