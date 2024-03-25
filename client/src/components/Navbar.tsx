import { useEffect, useState } from "react";
import { useNavigate, useLocation} from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [landingHere, setLandingHere] = useState<boolean>(true)

    const goTo = (path:string):void => {
        path !== '/' ? setLandingHere(false) : setLandingHere(true)
        navigate(path)
    }

    useEffect(() => {
      location.pathname !== '/' && setLandingHere(false)
    },[location])

  return (
    <nav  className={`${landingHere ? "" : "nav-dark"}`}>
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
