import React from 'react'
import { BsHeart } from 'react-icons/bs'
import StarRatings from 'react-star-ratings'

const ProductItem = (e) => {
  const { image, title, desc, category, type, price, rate } = e.item;

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
              <BsHeart title="Add to Wishlist" className="cursor-pointer text-pink-600" />
            </div>
          </div>
          <div className="my-2">
            <small className="bg-yellow-500 text-xs md:text-sm rounded-full px-2 text-white tracking-widest mr-3 inline-block">
              {category}
            </small>
            <small className="bg-red-600 text-xs md:text-sm rounded-full px-2 text-white tracking-widest mr-3 inline-block">
              {type}
            </small>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="text-lg xl:text-2xl text-red-600">$ {price}</p>
            <div>
              <StarRatings rating={rate} starDimension="13px" starSpacing="1px" starRatedColor="rgb(220,38,38)" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ProductItem