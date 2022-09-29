import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import './styles.css';

export function Info(){
    return(
        <div>
            <Header />
                <main className='container-info'>
                    <div>
                        <section className='section-info-banner'>
                            <div className='text-banner-info'> 
                                <h1>A GELATERIA</h1>
                            </div>
                        </section>
                        <section className='section-info-text'>
                            <div className='limit-section'>
                                <h2>Sobre Nós</h2>
                                <span>Nós simplesmente amamos sorvete!</span>
                                <p>
                                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete 
                                    para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas 
                                    para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar
                                    junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas 
                                    e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar 
                                    o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                                </p>
                            </div>
                        </section>
                        <section className='section-info-image'>
                            <div>
                                <img src="./assets/sobre-image.jpg" alt="Pessoas tomando sorvete" />
                                <img src="./assets/sorveteria.jpg" alt="Sorveteria" />
                            </div>
                        </section>
                    </div>
                </main>
            <Footer />
        </div>
    );
}