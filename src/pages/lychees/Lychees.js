import React from 'react'
import data from '../../data/lychees'
import PageTitle from '../../components/PageTitle'
import ProductWrap from '../../components/ProductWrap'

const Lychees = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(data)

  return (
    <>
      <PageTitle key="Lychees" title={'Lychees'} />
      <ProductWrap items={items} key="wrap-Chemistry" />
    </>
  )
}

export default Lychees
