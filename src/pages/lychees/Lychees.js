import React from 'react'
import ProductItem from '../../components/ProductItem'
import data from '../../data/lychees'
import PageTitle from '../../components/PageTitle'

const Lychees = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Lychees" title={'Lychees'} />
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((item) => {

          return (
            <ProductItem item={item} key={item.id} />
          )
        })}
      </section>
    </>
  )
}

export default Lychees