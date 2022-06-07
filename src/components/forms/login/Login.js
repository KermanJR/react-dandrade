import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContainerForm } from '../../layouts/containerForm/ContainerForm'
import { LoginForm } from './LoginForm'
import { LoginFullCreate } from './LoginFullCreate'
import { LoginInitialCreate } from './LoginInitialCreate'
import { LoginPasswordLost } from './LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset'

export const Login = () => {
  return (
    <section>
      <ContainerForm>
          <Routes>
            <Route path="" element={<LoginForm/>} />
            <Route path="cadastro" element={<LoginInitialCreate/>}/>
            <Route path="complete-seu-cadastro" element={<LoginFullCreate/>}/>
            <Route path="esqueci-minha-senha" element={<LoginPasswordLost/>}/>
            <Route path="redefinir-senha" element={<LoginPasswordReset/>}/>
          </Routes>
      </ContainerForm>
    </section>
  )
}
