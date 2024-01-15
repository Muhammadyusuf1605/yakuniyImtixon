import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

function SingleProduct({inputVal}) {
    const { id } = useParams();
    const singleUrl = `https://strapi-store-server.onrender.com/api/products/${id}`
    const { data: singleProduct, isPending, error } = useFetch(singleUrl)
    const [radiovalu, setRadiovalu] = useState()
    const radiovalue = (color) => {
        setRadiovalu(color)
    }
    useEffect(() => {
        console.log("O'zgardi");
    }, [singleUrl])
    return (
        <>
            {isPending ? <div className="w-full h-full flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div> : <div className="py-20">
                <div className="container">
                    <div className="text-md breadcrumbs">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/products">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                        <img src={singleProduct && singleProduct.data.attributes.image} alt="" className="w-96 h-96 object-cover rounded-lg lg:w-full" />
                        <div>
                            <h1 className="capitalize text-3xl font-bold">{singleProduct && singleProduct.data.attributes.title}</h1>
                            <h4 className="text-xl text-neutral-content font-bold mt-2">{singleProduct && singleProduct.data.attributes.company}</h4>
                            <p className="mt-3 text-xl">${singleProduct && (+singleProduct.data.attributes.price).toLocaleString('en-Us')}</p>
                            <p className="mt-6 leading-8">{singleProduct && singleProduct.data.attributes.description}</p>
                            <div className="mt-6">
                                <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
                                <div className="mt-2 flex gap-2">
                                    {singleProduct && singleProduct.data.attributes.colors.map((color) => {
                                        return <div key={color}>
                                            <input type="radio" name="radio-4" className="radio" onChange={() => radiovalue({color})}/>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label" htmlFor="amount">
                                    <h4 className="text-md font-medium -tracking-wider capitalize">amount</h4>
                                </label>
                                <select className="select select-secondary select-bordered select-md" id="amount" defaultValue={1} ref={inputVal}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </select></div><div className="mt-10">
                                <button className="btn btn-secondary btn-md">Add to bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}</>
    )
}

export default SingleProduct
