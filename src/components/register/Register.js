import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './Register.module.css'
import {RegisterForm} from './RegisterForm.js'
import { FullRegisterForm } from './FullRegisterForm'

export const Register = () => {
  return (
    <section className={styles.register}>
        <div className={styles.forms}>
            <Routes>
                <Route path='passo-1' element={<RegisterForm/>}/>
                <Route path='passo-2' element={<FullRegisterForm/>}/>
            </Routes>
        </div>
    </section>
  )
}
