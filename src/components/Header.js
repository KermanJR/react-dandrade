import React from 'react'
import styles from './Header.module.css'
import Logo from '../assets/Logo.png'
import { useMedia } from '../hooks/useMedia'

import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Container } from './Container'
import { UserHeader, UserHeaderNav } from './user/UserHeader'
import { UserContext } from '../context/UserContext'

import { URL } from '../api/Api'

export const Header = () => {

  const [mobileMenu, setMobileMenu] = React.useState(null)
  const mobile = useMedia('(max-width: 40rem)')

  const {login, userLogout} = React.useContext(UserContext)

  const {pathname} = useLocation()

  React.useEffect(()=>{
      setMobileMenu(false)
  },[pathname])


  
  return (
    <>
      {!login && <header className={`${mobile ? styles.headerMobile : styles.header}`}>
          <Container>
              <Link  
                  className={styles.logo}
                  to="/" 
                  aria-label="D. Andrade - Precatórios">
                  <img src={Logo}/>
              </Link>

              <nav className={`${mobile? styles.navMobile: styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                  <Link to={`${URL}/home`}>Início</Link>
                  <Link to={`${URL}/precatorios-dandrade/`}>Cenário dos precatórios</Link>
                  <Link to={`${URL}/sobre-nos/`}>Sobre nós</Link>
                  <Link to={`${URL}/contato`}>Contato</Link>
                  <Link to={`${URL}/home`}>Notícias</Link>
                  
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
      </header>}

      {login && <UserHeader/>}
    </> 
  )
}




