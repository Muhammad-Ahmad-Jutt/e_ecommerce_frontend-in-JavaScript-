import React from 'react'
import Products1 from './Products.json'
import { Link } from 'react-router-dom'
export default function Products() {
  return (
  <>
  <section className="text-gray-600 body-font" id="products">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-gray-900 title-font text-lg font-large">Products</h1>
      <div className="flex flex-wrap -m-4">
        {Products1.map((product) => (
          <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to={`/ProductDetails/${product.id}`}>
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </div>
            </Link>
            <div className="mt-4">
            <h1 className="text-gray-900 title-font text-lg font-large">{product.title}</h1>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.name}
              </h2>
              <p className="mt-1">Rs.{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section></>
    )
}
