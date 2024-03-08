import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();

    const goTo = (path:string):void => {
        navigate(path)
    }
  return (
    <nav>
        <h1>Name</h1>

        <div>
            <button onClick={() => goTo('/')}>Home</button>
            <button>About</button>
            <button>FAQ</button>
            <button>Location</button>
            <button onClick={() => goTo('/book')}>Book</button>
        </div>

        <h1>Login</h1>
    </nav>
  )
}
