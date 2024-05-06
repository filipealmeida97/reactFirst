import './Rodape.css';
import React from 'react';

export class Rodape extends React.Component {
    render () {
        return (
         <footer className="container">
            <div className='rede-sociais'>
                <img src="/imagens/fb.png"      alt="Banner principal da página"></img>
                <img src="/imagens/ig.png"      alt="Banner principal da página"></img>
                <img src="/imagens/tw.png"      alt="Banner principal da página"></img>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="Banner principal da página"></img>
            </div>
            <div className='copyright'>
                <p>Desenvolvido por Filipe Almeida</p>
            </div>
        </footer>           
        );
    };
}