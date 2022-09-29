import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import './styles.css';

export function Flavors(){
    return(
        <div>
            <Header />
                <main className='container-flavors'>
                    <div>
                       <section className='section-banner-flavors'>
                            <div className='text-banner-flavors'>
                                <h1>NOSSOS SABORES</h1>
                            </div>
                        </section>
                        <section className='limit-section section-content-flavors'>
                            <h2>SABORES DE SORVETE</h2>
                            <div className='box-cards'>
                                <div className='card'>
                                    <img src="./assets/sabor-oreo.png" alt="Sorvete Oreo" />
                                    <h5>Sorvete de Oreo</h5>
                                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                                </div>
                                <div className='card'>
                                    <img src="./assets/sabor-pistache.png" alt="Sorvete Pistache" />
                                    <h5>Sorvete Pistache</h5>
                                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                                </div>
                                <div className='card'>
                                    <img src="./assets/sabor-cookies-avela.png" alt="Sorvete Cookies & Avelã" />
                                    <h5>Sorvete Cookies & Avelã</h5>
                                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                                </div>
                                <div className='card'>
                                    <img src="./assets/sorvete-kiwi.png" alt="Sorvete de Kiwi" />
                                    <h5>Sorvete de Kiwi</h5>
                                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                                </div>
                                <div className='card'>
                                    <img src="./assets/sorvete-morango.png" alt="Sorvete de Morango" />
                                    <h5>Sorvete de Morango</h5>
                                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                                </div>
                                <div className='card'>
                                    <img src="./assets/sorvete-limao.png" alt="Sorvete de Limão Siciliano" />
                                    <h5>Sorvete de Limão Siciliano</h5>
                                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                                </div>
                            </div>
                        </section> 
                    </div>
                </main>
            <Footer />
        </div>
    );
}