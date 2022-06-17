import React from 'react'
import styles from './ContainerUser.module.css'

export const ContainerUser = ({children}) => {
  return (
    <section className={styles.containerUser}>
        {children}
    </section>
  )
}
