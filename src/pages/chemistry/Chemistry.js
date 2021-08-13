import React from 'react'
import data from '../../data/chemistry'
import PageTitle from '../../components/PageTitle'
import ProductWrap from '../../components/ProductWrap'

const Chemistry = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Chemistry" title={'Chemistry'} />
      <ProductWrap items={items} key="wrap-Chemistry" />
    </>
  )
}

export default Chemistry
