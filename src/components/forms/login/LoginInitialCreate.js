import React from 'react'
import { Link } from 'react-router-dom'


/*import components*/
import { Input } from '../../layouts/input/Input'
import { Button } from '../../layouts/button/Button'

/*import hooks*/
import { useForm } from '../../../hooks/useForm'

/*import API ROUTES*/
import { USER_POST } from '../../../api/Api'

/*import styles*/
import styles from './LoginInitialCreate.module.css'
import { Subtitle } from '../../layouts/subtitle/Subtitle'
import { Title } from '../../layouts/title/Title'




export const LoginInitialCreate = () => {

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
    <React.Fragment>
        <Subtitle>Passo 1/2</Subtitle>
        <Title>Crie sua conta</Title>
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
    </React.Fragment>
  )
}
