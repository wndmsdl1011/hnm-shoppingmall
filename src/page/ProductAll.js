import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setproductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products/`
    let response = await fetch(url)
    let data = await response.json()
    setproductList(data)
  }
  useEffect(()=>{
    getProducts()
  })
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
