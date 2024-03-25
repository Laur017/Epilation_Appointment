import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();

    const goTo = (path:string):void => {
        navigate(path)
    }
  return (
    <nav>
        <h1  onClick={() => goTo('/')}>ElectroGlow</h1>

        <div>
            <button onClick={() => goTo('/book')}>Programare</button>
            <button>Despre noi</button>
            <button>Contact</button>
        </div>

        <h3>Login</h3>
    </nav>
  )
}
