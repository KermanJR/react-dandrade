import React from 'react'
import { useNavigate } from 'react-router-dom'


export const UserContext = React.createContext()

export const UserStorage = ({children}) => {

    //Controla login
    const [login, setLogin]  = React.useState(false)
    const navigate = useNavigate()

    const userLogout = React.useCallback(async function(){
        setLogin(false)
        navigate('/login')
    }, [navigate])

    return (
        <UserContext.Provider value={{
            login,
            userLogout,
        }}>
            {children}
        </UserContext.Provider>
    )
}
