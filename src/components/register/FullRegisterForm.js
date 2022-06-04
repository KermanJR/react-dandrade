import React from 'react'
import styles from './FullRegisterForm.module.css'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { USER_POST } from '../../api/Api'

/*Import Components*/
import { Input } from '../forms/Input'
import { Button } from '../forms/Button'

export const FullRegisterForm = () => {

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
        <span className="span">Passo 2/2</span>
        <h1 className="title">Complete o seu cadastro</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input label="Como podemos te chamar?" type="text" name="name" />
            <div className={styles.cpfSexo}>
                <Input label="CPF" type="text" name="cpf" />
                <Input label="Sexo" type="text" name="sexo" />
            </div>
            <div className={styles.select}>
                <select>
                    <option selected>Interesse</option>
                    <option>Requerente</option>
                    <option>Advogado</option>
                </select>
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
