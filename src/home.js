import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from './services/api';

function Home() {

    const [input, setInput] = useState("");
    const [cep, setCep] = useState({});

    async function search(){
      
      if(isNaN(input) || input === ''){
        return;

      }
      else{
        try{
          const response = await api.get(input + '/json');
          setCep(response.data)
          setInput("");
          console.log(response.data)

        }catch{
          setInput("");
          alert("cep invalido")
        }

      }

    }

    function Maps(input) {
      const urlmap = 'https://www.google.com.br/maps/search/' + input;
      window.location.assign(urlmap);
    }

    return (
      <><><div class="navbar">
        <Link class='homebtn' to="/"><img src='./img/searchcep.png' /></Link>
        <Link class='contato' to="/contato">Contato</Link>
      </div>

        <div class="principal" style={{ backgroundImage: 'url("./img/back.jpg")' }}>
          <h1 class='titulo'>BUSCAR CEP</h1>
          <div className='input'>
            <input type='text' placeholder='Digite o cep...' value={input} onChange={(e) => setInput(e.target.value)} ></input>
            <button className='buttonsearch' onClick={search}><img src='./img/searchcep.png' width='30px' /></button>
          </div>
          {Object.keys(cep).length > 0 && (
            <main>
              <h2>CEP: {cep.cep}</h2>
              <span>{cep.logradouro}</span>
              <span>Bairro {cep.bairro}</span>
              <span>Cidade {cep.localidade} - {cep.uf}</span>
              <button className="mapbtn" onClick={() => Maps(cep.cep)}><img src='./img/mapsimg.png' width='100px' /></button>
            </main>)}
        </div></>
        <div>
        </div></>

    );
  }
export default Home;