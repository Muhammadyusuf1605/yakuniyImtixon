import { Link } from "react-router-dom"
import SingleProduct from "./SingleProduct"

function AllProduct({allProduct}) {
  return (
    <div className="container">
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allProduct.data.length === 0 && <h2>Sorry, no products matched your search...</h2>}
        {allProduct &&
          allProduct.data.map((product) => {
            return (
              <Link to={`/singleproduct/${product.id}`} key={product.id} className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
              <span className="px-4 py-4">
              <img className="rounded-xl h-64 md:h-48 w-full object-cover" src={product.attributes.image} alt={product.attributes.title} />
              </span>
              <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{product.attributes.title}</h2>
              <h3 className="text-slate-700">${(+product.attributes.price).toLocaleString('en-Us')}</h3>
              </div>
          </Link>
            )
          })
          }
      </div>
    </div>
  )
}

export default AllProduct
