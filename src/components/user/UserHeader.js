import React from 'react'
import styles from './UserHeader.module.css'
import Logo from '../../assets/Logo.png'

import { Link, useLocation } from 'react-router-dom'
import { useMedia } from '../../hooks/useMedia'
import { UserContext, UserStorage } from '../../context/UserContext'


export const UserHeader = () => {

    const [mobileMenu, setMobileMenu] = React.useState(null)
    const mobile = useMedia('(max-width: 40rem)')
    const {login, userLogout} = React.useContext(UserContext)

    const {pathname} = useLocation()

    React.useEffect(()=>{
        setMobileMenu(false)
    },[pathname])

    return (
        <>

           {!mobile &&
                <header className={styles.headerDesk}>
                    <Link  className={styles.logo} to="/" aria-label="D. Andrade - Precatórios">
                        <img src={Logo}/>
                    </Link>

                    <div className={styles.contact}>
                        <Link className={styles.myAccount} to="/minhaconta">Minha Conta</Link>
                        <Link className={styles.contactUs} to="/login" onClick={userLogout}>Sair</Link>
                    </div>
                </header>
            }

            {mobile && 
                <header className={styles.headerMobile}>
                
                    <Link  className={styles.logo} to="/" aria-label="D. Andrade - Precatórios">
                        <img src={Logo}/>
                    </Link>

                    <button
                        aria-label="menu"
                        className={`${styles.mobileButton}
                            ${mobileMenu && styles.mobileButtonActive}`}
                        onClick={() =>setMobileMenu(!mobileMenu)}>
                    </button>
                    
                    <div className={`${styles.navMobile}  ${mobileMenu && styles.navMobileActive}`}>
                        <Link className={styles.myAccount} to="/minhaconta">Minha Conta</Link>
                        <Link className={styles.contactUs} to="/login">Sair</Link>
                    </div>
                </header> 
                
            }
            

        </>
    )
}



