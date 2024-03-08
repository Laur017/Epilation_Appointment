import MainImage from '../assets/home-img.jpg'

export default function Home() {
  return (
    <div className="home-div">
        <div>
            <h2>The name and something more</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur voluptatem itaque veritatis delectus minima alias reiciendis consequatur obcaecati natus in dignissimos eligendi ut officia animi quis, porro omnis atque recusandae.</p>
            <button>Book now !</button>
        </div>
        <img src={MainImage} />
    </div>
  )
}
