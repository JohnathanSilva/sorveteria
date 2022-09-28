import React from 'react';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header>
            <div>
                <img src="./assets/logo.png" alt="Logo" />
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/sabores'>Sabores</Link>
                    <Link to='/sobre'>Sobre</Link>
                </nav>
            </div>    
        </header>
    );
}