import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../layouts/button/Button'
import { Input } from '../../layouts/input/Input'
import { Subtitle } from '../../layouts/subtitle/Subtitle'
import { Title } from '../../layouts/title/Title'
import styles from './LoginForm.module.css'

export const LoginForm = () => {
  return (
    <React.Fragment>
        <Subtitle>Área Restrita</Subtitle>
        <Title>Faça seu login</Title>

        {/*select*/}
        <div className={styles.divSelect}>
            <span>Interesse</span>
            <select defaultValue="">
                <option selected disabled>Selecione</option>
                <option>Requerente</option>
                <option>Advogado</option>
            </select>
        </div>
        
        {/*email*/}
        <Input
            label="E-mail"
            type="text"
            name="email"
            placeholder="Insira seu e-mail"
        />

        {/*password*/}
        <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
        />

        {/*lost password*/}
        <Link to="/login/esqueci-minha-senha">
            <span className='lostPassword'>Esqueci minha senha</span>
        </Link>

        <Button>Continuar</Button>

        {/*link create account*/}
        <div className='createAccount'>
            <p>Não possui conta?</p>
            <Link to="/login/cadastro">Criar conta</Link>
        </div>
    </React.Fragment>
  )
}
