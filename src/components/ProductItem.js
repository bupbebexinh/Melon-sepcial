import React from 'react'
import { BsHeart } from 'react-icons/bs'

const ProductItem = (e) => {
  const { image, title, desc, category, type, price } = e.item;

  return (
    <>
      <div className="product-item bg-gray-200 rounded-lg">
        <div className='product-item__top h-0 relative rounded-t overflow-hidden'>
          <div className="absolute -inset-0"><img src={image} alt={title} className="rounded-t-lg w-full h-full object-cover" /></div>
        </div>
        <div className='product-item__content px-5'>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold mt-5">{title}</h2>
              <p>{desc}</p>
            </div>
            <div>
              <BsHeart title="Add to Wishlist" className="cursor-pointer" />
            </div>
          </div>
          <div className="my-2">
            <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
              {category}
            </small>
            <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
              {type}
            </small>
          </div>
          <p className="text-2xl pb-6">$ {price}</p>
        </div>
        
      </div>
    </>
  )
}

export default ProductItem