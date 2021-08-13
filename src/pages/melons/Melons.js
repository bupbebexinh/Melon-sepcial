import React from 'react'
import data from '../../data/melons'
import PageTitle from '../../components/PageTitle'
import ProductWrap from '../../components/ProductWrap'

const Melons = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Melons" title={'Melons'} />
      <ProductWrap items={items} key="wrap-melons" />
    </>
  )
}

export default Melons
