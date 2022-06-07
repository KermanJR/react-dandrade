import React from 'react'
import { Subtitle } from '../../layouts/subtitle/Subtitle'
import { Title } from '../../layouts/title/Title'
import { Input } from '../../layouts/input/Input'
import { Button } from '../../layouts/button/Button'

export const LoginPasswordLost = () => {
  return (
    <React.Fragment>
        <Subtitle>Recupere sua senha</Subtitle>
        <Title>Insira seu e-mail cadastrado</Title>
        <form>
            <Input
                label="E-mail"
                type="text"
                name="email"
                placeholder="Insira seu e-mail"
            />
            <Button>Redefinir senha</Button>
        </form>
    </React.Fragment>
  )
}
