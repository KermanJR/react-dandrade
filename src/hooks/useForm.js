import React from "react";

export const useForm = (type) =>{
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState('')

    const validate = (value) =>{
        if(type === false){
            return true;
        }

        if(value.lenght === 0){
            setError('Preencha um valor')
            return false
        }

        else{
            setError(null)
            return true
        }
    }

    const onChange = ({target}) =>{
        if(error) validate(target.value)
        setValue(target.value)
    }    

    

    return{
        value,
        setValue,
        onChange,
        error,
        validate: ()=>validate(value),
        onBlur: ()=>validate(value),
    }

    
}