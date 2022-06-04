import React from 'react'
import styles from './Input.module.css'
export const Input = ({label, type, name, value, onChange, onBlur, placeholder}) => {
  return (
    <section className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input 
            className={styles.input}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            
        />

    </section>
  )
}
