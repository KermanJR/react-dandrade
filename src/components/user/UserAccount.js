import React from 'react'
import { Subtitle } from '../layouts/subtitle/Subtitle'
import { Title } from '../layouts/title/Title'
import styles from './UserAccount.module.css'
import { Button } from '../layouts/button/Button'

export const UserAccount = () => {

    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [dateBirthday, setDateBirthday] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [disable, setDisable] = React.useState(true)


  return (
    <section className={styles.myAccount}>
        <Subtitle>Área Restrita</Subtitle>
        <Title>Minha Conta</Title>
     
            <div className={styles.editBlock}>
                {console.log(disable)}
                <p>Nome</p>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    
                />
                <button onClick={
                    ()=>setDisable(!disable)}
                >Editar</button>
            </div>

            <div className={styles.editBlock}>
                <p>Sexo</p>
                <input  
                    type="text"
                    name="sex"
                    value="Masculino"
                />
                <button>Editar</button>
            </div>

            <div className={styles.editBlock}>
                <p>Data de nascimento</p>
                <input 
                    type="text"
                    name="dateBirthday"
                    value="07/09/2000"
                />
                <button>Editar</button>
            </div>

            <div className={styles.editBlock}>
                <p>CPF</p>
                <input 
                    type="text"
                    name="cpf"
                    value="44.444.444.44"
                    isAccount="true"
                />
                <button>Editar</button>
            </div>

            <div className={styles.editBlock}>
                <p>Número de Telefone</p>
                <input 
                    type="text"
                    name="phone"
                    value="(11) 4444 4444"
                />
                <button>Editar</button>
            </div>
            <Button>Voltar</Button>

    </section>
  )
}
