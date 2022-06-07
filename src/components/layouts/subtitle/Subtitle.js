import React from 'react'
import styles from './Subtitle.module.css'

export const Subtitle = ({children}) => {
  return (
    <p className={styles.subtitle}>{children}</p>
  )
}
