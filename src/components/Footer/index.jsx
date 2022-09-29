import React from 'react';

import './styles.css';

export function Footer(){
    return(
        <footer>
            <div className='limit-section container-footer'>
                <img src="./assets/logo.png" alt="Logo" />
                <div className='box'>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='box'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className='box'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div> 
            </div>
            <div className='limit-section copyright'>
                <p>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>
            </div>
        </footer>
    );
}