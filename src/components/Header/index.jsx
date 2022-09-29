import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export function Header(){
    return(
        <header>
            <div className='limit-section'>
                <img src="./assets/logo.png" alt="Logo" />
                <nav>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/sabores'>Sabores</Link>
                    <Link className='link' to='/sobre'>Sobre</Link>
                </nav>
            </div>    
        </header>
    );
}