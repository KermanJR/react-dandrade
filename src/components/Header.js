import React from 'react'
import styles from './Header.module.css'
import Logo from '../assets/Logo.png'
import { useMedia } from '../hooks/useMedia'

import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Container } from './Container'
import { UserHeader, UserHeaderNav } from './user/UserHeader'

export const Header = () => {

  const [mobileMenu, setMobileMenu] = React.useState(null)
  const mobile = useMedia('(max-width: 40rem)')

  const {pathname} = useLocation()

  React.useEffect(()=>{
      setMobileMenu(false)
  },[pathname])


  var login = false;
  
  return (
    <>
      <header className={`${mobile ? styles.headerMobile : styles.header}`}>
          <Container>
              <Link  
                  className={styles.logo}
                  to="/" 
                  aria-label="D. Andrade - Precatórios">
                  <img src={Logo}/>
              </Link>

              <nav className={`${mobile? styles.navMobile: styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                  <Link to="/">Início</Link>
                  <Link to="/precatorios">Cenário dos precatórios</Link>
                  <Link to="/sobre-nos">Sobre nós</Link>
                  <Link to="/contato">Contato</Link>
                  <Link to="/noticias">Notícias</Link>
                  
              </nav>

              {mobile? 
                '':
                <Link className={styles.contact} to="/contato">Fale conosco</Link>
              }

              {mobile && 
              <button
                aria-label="menu"
                className={`${styles.mobileButton}
                ${mobileMenu && styles.mobileButtonActive}`}
                onClick={() =>setMobileMenu(!mobileMenu)}>
              </button>
        }
              

          </Container>
      </header>
    </>
  )
}




