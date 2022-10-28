/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from "react-icons/ai"
import ParteOscura from './ParteOscura'

const Contacto = () => {
    return <footer className='footer' id='contact'>
        <h1>Podes contactarme en:</h1>

        <div className='contactos'>
            <a href="https://github.com/cris0fw" target="_blank" rel="noreferrer"> <BsGithub color='#ffff' fontSize="50"/> </a>
            <a href="https://www.linkedin.com/in/cristian-ludue%C3%B1a-92288423b/" target="_blank" rel="noreferrer"> <AiFillLinkedin color='#0A66C2' fontSize="50" /> </a>
            <a href="https://www.instagram.com/i_mdanger0us/?next=%2F" target="_blank"> <AiFillInstagram color='#CF3577' fontSize="50" /> </a>
            <a href="https://www.facebook.com/cris.ludue5/" target="_blank"> <AiFillFacebook color='0A66C2' fontSize="50" /> </a>
        </div>

        <ParteOscura />
    </footer>
}

export default Contacto