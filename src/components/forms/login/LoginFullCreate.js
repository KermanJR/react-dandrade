import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../layouts/input/Input'
import { Button } from '../../layouts/button/Button'
import { useForm } from '../../../hooks/useForm'
import { USER_POST } from '../../../api/Api'
import { Title } from '../../layouts/title/Title'
import styles from './LoginFullCreate.module.css'
import { Subtitle } from '../../layouts/subtitle/Subtitle'

export const LoginFullCreate = () => {

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
        <Subtitle>Passo 2/2</Subtitle>
        <Title>Complete o seu cadastro</Title>
        <form onSubmit={handleSubmit}>

            <Input 
                label="Como podemos te chamar?"
                type="text"
                name="name"
                placeholder="Insira seu"
             />
            <div className={styles.cpf_sex}>
                <Input 
                    label="CPF"
                    type="text"
                    name="cpf"
                    placeholder="Insira seu CPF"
                 />
                <Input label="Sexo" type="text" name="sexo" />
            </div>
            <div className={styles.select}>
                <select>
                    <option selected>Interesse</option>
                    <option>Requerente</option>
                    <option>Advogado</option>
                </select>
            </div>

            <Input
                label="Inscrição de Advogado (OAB)"
                type="text"
                name="inscricao"
                placeholder="Insira"
            />

            <div className={styles.cep_state_city}>
                <Input label="CEP" type="text" name="cep" placeholder="Insira"/>
                <Input label="Estado" type="text" name="state" placeholder="Insira" />
                <Input label="Cidade" type="text" name="city" placeholder="Insira"/>
            </div>

            <div className={styles.adress_number}>
                <Input label="Endereço" type="text" name="address" placeholder="Insira"/>
                <Input label="N°" type="text" name="number" placeholder="Insira" />
            </div>

            <div className={styles.dateBirthday_phone}>
                <Input label="Data de nascimento" type="text" name="date_birthday" placeholder="Insira sua data de nascimento"/>
                <Input label="Número de telefone" type="text" name="number" placeholder="Insira seu telefone" />
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
