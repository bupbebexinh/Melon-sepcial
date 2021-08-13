import React from 'react'
import data from '../../data/seeds'
import PageTitle from '../../components/PageTitle'
import ProductWrap from '../../components/ProductWrap'

const Seeds = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Seeds" title={'Seeds'} />
      <ProductWrap items={items} key="wrap-Chemistry" />
    </>
  )
}

export default Seeds
