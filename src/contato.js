import React from 'react';
import { Link } from 'react-router-dom';
import './contato.css';

function insta(){
  return (
    window.location.assign("https://www.instagram.com/lucass_s_franco/")
  );
}

function linkedin(){
  return (
    window.location.assign("https://www.linkedin.com/in/lucas-franco-5ba07525b/")
  );
}

function github(){
  return (
    window.location.assign("https://github.com/lucasfrancodasilva")
  );
}


function Contato() {
  return (
    <><div class="navbar">
      <Link class='homebtn' to="/"><img src='./img/searchcep.png' /></Link>
      <Link class='contato' to="/contato">Contato</Link>
    </div>
        <div class="fundo" style={{ backgroundImage: 'url("./img/nord1.jpg")' }}>
          <div className='contatos'>
            <button className='insta' onClick={insta}><img src='./img/insta.png' width='300px' /></button>
            <button className='linkedin' onClick={linkedin}><img src='./img/linkedin.png' width='150px' /></button>
            <button className='git' onClick={github}>GitHub</button>
          </div>
        </div></>

  );
}

export default Contato;