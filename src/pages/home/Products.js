import React from 'react'
import ProductItem from '../../components/ProductItem'
import dataMelon from '../../data/melons'
import dataMango from '../../data/mangos'
import dataLychee from '../../data/lychees'
import dataChemistry from '../../data/chemistry'

const Products = () => {
  // eslint-disable-next-line
  const [itemsMelon, setItemsMelon] = React.useState(dataMelon)
  const [itemsMango, setItemsMango] = React.useState(dataMango)
  const [itemsLychee, setItemsLychee] = React.useState(dataLychee)
  const [itemsChemistry, setItemsChemistry] = React.useState(dataChemistry)

  return (
    <>
      <h2 className="px-5 mt-5 font-bold text-2xl text-blue-600 text-center">Melons</h2>
      <section className="p-5 grid gap-2 lg:gap-5 grid-cols-2 md:grid-cols-4 2xl:px-10">
        {itemsMelon.slice(0, 4).map((item) => {
          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
      <h2 className="px-5 mt-5 font-bold text-2xl text-blue-600 text-center">Mangos</h2>
      <section className="p-5 grid gap-2 lg:gap-5 grid-cols-2 md:grid-cols-4 2xl:px-10">
        {itemsMango.slice(0, 4).map((item) => {
          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
      <h2 className="px-5 mt-5 font-bold text-2xl text-blue-600 text-center">Lychee</h2>
      <section className="p-5 grid gap-2 lg:gap-5 grid-cols-2 md:grid-cols-4 2xl:px-10">
        {itemsLychee.slice(0, 4).map((item) => {
          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
      <h2 className="px-5 mt-5 font-bold text-2xl text-blue-600 text-center">Chemistry</h2>
      <section className="p-5 grid gap-2 lg:gap-5 grid-cols-2 md:grid-cols-4 2xl:px-10">
        {itemsChemistry.slice(0, 4).map((item) => {
          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
    </>
  )
}

export default Products
