import React from 'react';
import Products from './Products';
import Catalog from "./Catalog";
import Popular_products from './Popular_products';
export default function Home() {
  return (
    <div>
    <Popular_products />
      <br />
      <Products />
      <br />
      <Catalog />
    </div>
    )
}
