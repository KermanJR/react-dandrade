import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserEdit } from './UserEdit'
import { UserHeader } from './UserHeader'

export const User = () => {
  return (
    <section>
        <UserHeader/>
        <Routes>
            <Route path='/'/>
            <Route path='editar' element={<UserEdit/>}/>
        </Routes>
    </section>
  )
}
