import './Banner.css';
import React from 'react';

export class Banner extends React.Component {
    render () {
        return (
         <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página"></img>
        </header>           
        );
    };
}