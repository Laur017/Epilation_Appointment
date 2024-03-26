import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = () => {
        if(login === import.meta.env.VITE_LOGIN && 
            pass === import.meta.env.VITE_PASSWORD){
            navigate(`/${import.meta.env.VITE_PATH}`)
        }else{
            alert('User invalid !')
        }
    }
  return (
    <div className='login-div'>
        <h1>
            Logeaza-te !
        </h1>
        <label>
            User
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
        </label>
        <label>
            Parola
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
