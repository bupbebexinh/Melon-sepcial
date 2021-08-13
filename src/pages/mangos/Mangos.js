import React from 'react'
import data from '../../data/mangos'
import PageTitle from '../../components/PageTitle'
import ProductWrap from '../../components/ProductWrap'

const Mangos = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Mangos" title={'Mangos'} />
      <ProductWrap items={items} key="wrap-Chemistry" />
    </>
  )
}

export default Mangos
