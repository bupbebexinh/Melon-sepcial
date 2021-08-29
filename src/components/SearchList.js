// src/components/SearchList.js

import React from 'react';
// import ProductItem from './ProductItem';
import ProductWrap from './ProductWrap'

function SearchList({ filteredProducts }) {
  // const filtered = filteredProducts.map(product =>  <ProductItem key={product.id} product={product} />); 
  // console.log(filteredProducts);
  return (
    <>
      <ProductWrap items={filteredProducts} key="searchList" />
    </>
    // <div className="py-5 grid gap-3 md:gap-5 grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 px-3 md:px-5 2xl:px-20">
    //   {filtered}
    // </div>
  );
}

export default SearchList;