import React from 'react'
import { Subtitle } from '../layouts/subtitle/Subtitle'
import { Title } from '../layouts/title/Title'
import styles from './UserSearchPrecatory.module.css'
import { Input } from '../layouts/input/Input'
import { useSelect } from '../../hooks/useSelect'
import Icon_Help from '../../assets/icons/help-circle-icon.png'
import { Link } from 'react-router-dom'

export const UserSearchPrecatory = () => {

  const [query, setQuery] = React.useState('Número do processo')

  let selectValue = useSelect()

  return (
    <section className={styles.searchPrecatory}>
      <Subtitle>Área Restrita</Subtitle>
      <Title>Consulte a situação do seu precatório</Title>
      <form>
        <div className={styles.formSearchPrecatory}>

          <div className={styles.select}>
            <label>Consulta por *</label>
                <select defaultValue="Número do processo" onChange={(e)=>setQuery(e.target.value) }>
                    <option value="Número do processo">Número do processo</option>
                    <option value="Requerente">Requerente</option>
                    <option value="Advogado">Advogado</option>
                </select>
          </div>


          <Input 
            label={query}
            type="text"
          />

          <Input 
            label="b"
            type="text"
          />

          <Input 
            label="c"
            type="text"
          />
          <button className="button">Consultar</button>
         
        </div>        
      </form>

      <section className={styles.sectionOffer}>
        <div className={styles.divOffer}>
          <img src={Icon_Help}/>
          <p>Antecipe o seu precatório e receba o valor combinado
            à vista, no ato da assinatura. <Link to="/">Saiba mais</Link>
          </p>
        </div>
        
      </section>
    </section>
  )
}
