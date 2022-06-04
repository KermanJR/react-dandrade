import React from 'react'
import styles from './Footer.module.css'
import LogoWhite from '../../src/assets/Logo-White.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.container_footer}>

        
            <div className={styles.logo_container}>
                <img src={LogoWhite} />
            </div>

            <div className={styles.contact}>
                <div>
                    <h2>Contato</h2>
                    <ul>
                        <li>(11) 5565-8854</li>
                        <li>contato@dandrade.com.br</li>
                    </ul> 
                </div>

                <div>
                    <h2>Endereço</h2>
                    <ul className={styles.adress}>
                        <li>Rua Verbo Divino, 2011, Toore B - Conj. 1007
                            Chácara Santo Antônio São Paulo - SP | CEP 04719002
                        </li>
                        <li>CNPJ: 41.664.645/0001-06</li>
                    </ul> 
                </div>
            </div>

            <div className={styles.social_midia}>
                <h2>Siga nas redes sociais</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li>Trabalhe Conosco</li> 
                    <li>Política de Privacidade</li> 
                </ul>
                
            </div>

            <div className={styles.location}>
                <h2>Localização</h2>
                
            </div>

        </section>

    </footer>
  )
}
