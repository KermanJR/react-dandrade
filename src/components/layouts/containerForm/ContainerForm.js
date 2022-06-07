import React from 'react'
import styles from './ContainerForm.module.css'

export const ContainerForm = ({children}) => {
  return (
    <section className={styles.ContainerForm}>
        {children}
    </section>
  )
}
