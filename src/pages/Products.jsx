import { useEffect, useRef, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import AllProduct from "./AllProduct";
import ProductNumber from "../components/ProductNumber";

function Products() {
  const product = useRef('')
  const category = useRef('')
  const company = useRef('')
  const order = useRef('')
  const range = useRef('')
  const checbox = useRef('')

  const [productc, setProductc] = useState('e')
  const [categorye, setCategorye] = useState('all')
  const [companye, setCompanye] = useState('all')
  const [ordery, setOrdery] = useState('a-z')
  const [rangery, setRangery] = useState(100000)
  const [checboxy, setChecboxy] = useState(false)
  const [rangeVal, setRangeVal] = useState(100000)

  const rangeValue = (e) => {
    e.preventDefault()
    setRangeVal(e.target.value)
    console.log(e && e.target.value);
  }
  // const url = 'https://strapi-store-server.onrender.com/api/products'
  const handleSubmit = (e) => {
    e.preventDefault()
    setProductc(product.current.value);
    setCategorye(category.current.value);
    setCompanye(company.current.value);
    setOrdery(order.current.value);
    setRangery(range.current.value);
    setChecboxy(checbox.current.checked);
  }
  function resetSubmit() {
    setProductc('e');
    setCategorye('all');
    setCompanye('all');
    setOrdery('a-z');
    setRangery(100000);
    setChecboxy(false);
    console.log(1);
  }
  const FilterUrl = `https://strapi-store-server.onrender.com/api/products?search=${productc}&category=${categorye}&company=${companye}&order=${ordery}&price=${rangery}&shipping=${checboxy}`
  const { data: allProduct, isPending, error } = useFetch(FilterUrl)


  useEffect(() => {
    console.log("Yangilandi");
  }, [FilterUrl])


  return (
    <>
    {isPending ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div> : <div className="py-20 dark:bg-[#414558]">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)} className="form-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 px-8 gap-4 bg-[#F0F6FF]">
          <div>
            <h2 className="py-2 px-1">Search Product</h2>
          <input type="text" ref={product} defaultValue={productc} className="input input-bordered input-sm w-full max-w-2xs"/>
          </div>
          <div>
            <h2 className="py-2 px-1">Select Category</h2>
          <select className="select w-full max-w-2xs select-bordered select-sm" ref={category} defaultValue={categorye}>
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
          </div>
          <div>
            <h2 className="py-2 px-1">Select Company</h2>
          <select className="select w-full max-w-2xs select-bordered select-sm" name="company" id="company" ref={company} defaultValue={companye}>
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
          </div>
          <div>
            <h2 className="py-2 px-1">Sort By</h2>
          <select name="order" id="order" defaultValue={ordery} ref={order} className="select w-full max-w-2xs select-bordered select-sm">
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
          </div>
          <div>
            <span className="flex justify-between text-md py-2 px-1">
              <h2>Select Price</h2>
              <h3>${(+rangeVal).toLocaleString('en-Us')}</h3>
            </span>
          <input type="range" name="price" min="0" max="100000" className="range range-primary range-sm" step="1000" onChange={(e) => rangeValue(e)} defaultValue={rangery} ref={range} />
          <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">0</span>
            <span className="font-bold text-md">Max : $1,000.00</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-base">Free Shipping</h2>
          <input type="checkbox" name="shipping" className="checkbox checkbox-primary checkbox-sm mr-auto ml-auto" ref={checbox} defaultChecked={checboxy}/>
          </div>
          <button type="submit" className="btn btn-active btn-primary">Search</button>
          <button type="button" onClick={() => resetSubmit()} className="btn btn-secondary">Reset</button>
        </form>
      </div>
      {allProduct && <ProductNumber allProduct={allProduct}/>}
      {allProduct && <AllProduct allProduct={allProduct} />}
    </div>}
    </>
  )
}

export default Products




// import { useEffect, useRef, useState } from "react"
// import { useFetch } from "../hooks/useFetch"
// const url = 'https://strapi-store-server.onrender.com/api/products'
// // const FilterUrl = 'https://strapi-store-server.onrender.com/api/products?search=s&category=all&company=all&order=a-z&price=100000&shipping=true'
// function Products() {
//   const {data: allProduct, isPending, error} = useFetch(url)
//   console.log(allProduct && allProduct.data);
//   const [product,setProduct] = useState('')
//   const [category,setCategory] = useState('')
//   const [company,setCompany] = useState('')
//   const [sortBys,setSortBys] = useState('')
//   const [price, setPrice] = useState('')
//   const [shipping,setShipping] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }


//   useEffect(() => {
//     console.log(1);
//   }, [category])
//   return (
//     <div className="py-20">
//       <div className="container">
//       <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
//         <div className="form-control">
//           <label htmlFor="search" className="label">
//             <span className="label-text capitalize">search product</span>
//           </label>
//           <input type="search" name="search" className="input input-bordered input-sm" defaultValue=""></input>
//         </div>
//         <div className="form-control">
//           <label htmlFor="category" className="label">
//             <span className="label-text capitalize">select category</span>
//           </label>
//           <select name="category" id="category" className="select select-bordered select-sm" defaultValue="all">
//             <option value="all">all</option>
//             <option value="Tables">Tables</option>
//             <option value="Chairs">Chairs</option>
//             <option value="Kids">Kids</option>
//             <option value="Sofas">Sofas</option>
//             <option value="Beds">Beds</option>
//           </select>
//         </div>
//         <div className="form-control">
//           <label htmlFor="company" className="label">
//             <span className="label-text capitalize">select company</span>
//           </label>
//           <select name="company" id="company" className="select select-bordered select-sm" defaultValue="all">
// <option value="all">all</option>
// <option value="Modenza">Modenza</option>
// <option value="Luxora">Luxora</option>
// <option value="Artifex">Artifex</option>
// <option value="Comfora">Comfora</option>
// <option value="Homestead">Homestead</option>
//           </select>
//         </div>
//         <div className="form-control">
//           <label htmlFor="order" className="label">
//             <span className="label-text capitalize">sort by</span>
//           </label>
//           <select name="order" id="order" className="select select-bordered select-sm" defaultValue="a-z">
// <option value="a-z">a-z</option>
// <option value="z-a">z-a</option>
// <option value="high">high</option>
// <option value="low">low</option>
//           </select>
//         </div>
//         <div className="form-control">
//           <label htmlFor="price" className="label cursor-pointer">
//             <span className="label-text capitalize">select price</span>
//             <span>$1,000.00</span>
//           </label>
//           <input type="range" name="price" min="0" max="100000" className="range range-primary range-sm" step="1000" defaultValue="100000"></input>
//             <div className="w-full flex justify-between text-xs px-2 mt-2">
//               <span className="font-bold text-md">0</span>
//               <span className="font-bold text-md">Max : $1,000.00</span>
//             </div>
//         </div>
//         <div className="form-control items-center">
//           <label htmlFor="shipping" className="label cursor-pointer">
//             <span className="label-text capitalize">free shipping</span>
//           </label>
//           <input type="checkbox" name="shipping" className="checkbox checkbox-primary checkbox-sm"></input>
//         </div>
//         <button type="submit" className="btn btn-primary btn-sm"  onSubmit={(e) => handleSubmit(e)}>search</button>
//         <a className="btn btn-accent btn-sm" href="/products">reset</a>
//       </form>
//       <div>
//         <h2></h2>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Products
