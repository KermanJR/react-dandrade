import React from 'react'
import styles from './RegisterForm.module.css'
import { Input } from '../forms/Input'
import { Button } from '../forms/Button'
import { Link } from 'react-router-dom'
import { USER_POST } from '../../api/Api'
import { useForm } from '../../hooks/useForm'



export const RegisterForm = () => {

    const email = useForm()
    const password = useForm()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const { url , options} = USER_POST({
            email: email.value,
            password: password.value
        })
        const response = await fetch(url, options)
        const json = await response.json()
        console.log(json)

    }


  return (
    <section className={styles.form}>
        <span className="span">Passo 1/2</span>
        <h1 className="title">Crie sua conta</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input 
                label="Email"
                type="email"
                name="email"
                placeholder="Insira seu e-mail"
                {...email}
            />

            <Input 
                label="Senha" 
                type="password" 
                name="password" 
                placeholder="Insira sua senha"
                {...password}
            />
            <div className={styles.checkbox}>
                <input type="checkbox"/>
                <p>Li e aceito os <span className={styles.bold}>Termos de Uso</span> e <span className={styles.bold}>Política de Privacidade.</span></p>
            </div>

            <div className={styles.checkbox}>
                <input type="checkbox"/>
                <p>Desejo receber atualizações sobre notícias, eventos e ofertas.</p>
            </div>

            <Button>Continuar</Button>

            <div className="btnLogin">
                <p>Já possui uma conta?</p>
                <Link className="bold" to="/login"> Fazer login</Link>
            </div>
        </form>
    </section>
  )
}
