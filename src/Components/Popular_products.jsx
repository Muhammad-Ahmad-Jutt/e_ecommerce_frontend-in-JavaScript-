import React from 'react'
import {Link} from 'react-router-dom'
import Products from './Products.json'
export default function Popular_products() {
  const rec_product = Products.filter((products) => products.rating.count>100)
  return (    
  <section class="text-gray-600 body-font" id='hotsales'>

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    <h1 className="text-gray-900 title-font text-lg font-large">Popular Products</h1>
      <div class="flex flex-wrap -m-4">
        {rec_product.map((product) => (
        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={`/ProductDetails/${product.id}`}>
          {/* Use Link to navigate to a new page with the product ID */}
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={product.image}
            />
          </div>
        </Link>
        <div className="mt-4">
  <h1 className="text-gray-900 title-font text-lg font-large">
    <span style={{ color: 'blue' }}>Sold Today:</span> {product.rating.count}
  </h1>
  <h1 className="text-gray-900 title-font text-lg font-large">
    {product.title}
  </h1>
  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
    {product.category}
  </h3>
  <h2 className="text-gray-900 title-font text-lg font-medium">
    {product.name}
  </h2>
  <p className="mt-1">Rs.{product.price}</p>
</div>
      </div>
    ))            }

      </div>

    </div>

  </div>
</section>


  )
}
