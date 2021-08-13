import React from 'react'
import ProductItem from './ProductItem'

const ProductWrap = (e) => {
  const items = e.items;

  return (
    <>
      <section className="py-5 grid gap-3 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 px-3 md:px-5 2xl:px-20">
        {items.map((item) => {

          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
    </>
  )
}
export default ProductWrap