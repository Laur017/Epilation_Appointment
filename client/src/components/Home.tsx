import MainImage from '../assets/home-img.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-div">
        <div>
            <h2>The name and something more</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur voluptatem itaque veritatis delectus minima alias reiciendis consequatur obcaecati natus in dignissimos eligendi ut officia animi quis, porro omnis atque recusandae.</p>
            <button onClick={() => navigate('/book')}>Book now !</button>
        </div>
        <img src={MainImage} />
    </div>
  )
}
