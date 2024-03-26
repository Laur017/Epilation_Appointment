import './Login.css'

export default function Login() {

    const handleLogin = () => {
        console.log(import.meta.env.VITE_LOGIN)
    }
  return (
    <div className='login-div'>
        <h1>
            Logeaza-te !
        </h1>
        <label>
            User
            <input type="text"/>
        </label>
        <label>
            Parola
            <input type="password"/>
        </label>
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
