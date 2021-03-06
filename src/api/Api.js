export const API_URL = 'https://localhost:5000' 
export const URL = 'https://dandrade.com.br'

export function USER_POST(body){
    return{
        url: API_URL + '/login',
        options:{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}