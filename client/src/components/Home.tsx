import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-div">
        <div className="home-text">
          <h1>Descoperă libertatea pielii catifelate.</h1>
          <button onClick={() => navigate("/book")}>Rezervă acum</button>
        </div>
    </div>
  )
}
