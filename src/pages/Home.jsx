// rrd import
import { Link } from "react-router-dom"
// import img
import Birinchi from '../assets/hero1-deae5a1f.webp'
import Ikkinchi from '../assets/hero2-2271e3ad.webp'
import Uchinchi from '../assets/hero3-a83f0357.webp'
import Tortinchi from '../assets/hero4-4b9de90e.webp'
import FeaturesProduct from "../components/FeaturesProduct"

// hooks
import { useFetch } from "../hooks/useFetch"

function Home() {
  const url = 'https://strapi-store-server.onrender.com/api/products?featured=true'
    const {data: products, isPending, error} = useFetch(url)
  return (
    <>
    {isPending ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div> : <div className='container'>
    <div className='flex justify-between items-center pt-20 pb-20'>
    <div className='home-text'>
      <h2 className='home-text-title font-bold'>We are changing the way people shop</h2>
      <p className='home-text-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
      <button className='home-btn'><Link to={`products`}>Our Products</Link></button>
    </div>
    <div className='home-carousel'>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img src={Birinchi} width={300} height={400} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={Ikkinchi} width={300} height={400} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={Uchinchi} width={300} height={400} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={Tortinchi} width={300} height={400} className="rounded-box" />
        </div>
      </div>
    </div>
    </div>
    <FeaturesProduct products={products}/>
  </div>}
  </>
  )
}

export default Home
