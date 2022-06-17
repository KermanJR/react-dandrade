import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContainerForm } from '../layouts/containerForm/ContainerForm'
import { ContainerUser } from '../layouts/containerUser/ContainerUser'
import { UserAccount } from './UserAccount'
import { UserEdit } from './UserEdit'
import { UserHeader } from './UserHeader'
import { UserHome, UserSearchPrecatory } from './UserSearchPrecatory'

export const User = () => {
  return (
    <section>
        <UserHeader/>
          <ContainerUser>
          <Routes>
              <Route 
                path='/'
                element={<UserAccount/>}
              />
              <Route
                path='precatorios'
                element={<UserSearchPrecatory/>}
              />
          </Routes>
        </ContainerUser>
    </section>
  )
}
