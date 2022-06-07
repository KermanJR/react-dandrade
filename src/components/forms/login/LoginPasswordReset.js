import React from 'react'
import { Button } from '../../layouts/button/Button'
import { Subtitle } from '../../layouts/subtitle/Subtitle'
import { Title } from '../../layouts/title/Title'
import { Input } from '../../layouts/input/Input'

export const LoginPasswordReset = () => {
  return (
    <React.Fragment>
        <Subtitle>Recupere sua senha</Subtitle>
        <Title>Insira seu e-mail cadastrado</Title>
        <form>
            <Input
                label="Nova senha"
                type="password"
                name="newPassword"
                placeholder="Insira sua senha"
            />

            <Input
                label="Confirmar nova senha"
                type="password"
                name="confirmNewPassword"
                placeholder="Insira sua senha"
            />
            <Button>Confirmar nova senha</Button>
        </form>
    </React.Fragment>
  )
}
