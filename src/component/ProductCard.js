import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const goProductDetail = () => {
    navigate(`/product/${item.id}`)
  } 
  return (
    <div className="product-card" onClick={goProductDetail}>
      <img width="300px" src={item?.img} />
      <div className='choice-title'>{item?.choice == true?"Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className='new-title'>{item?.new == true?"신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
