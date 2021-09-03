// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import initialDetails from '../data/initialDetails';
import PageTitle from './PageTitle'

const Search = (props) => {
  const searchField = props.keyword;

  const filteredProducts = initialDetails.filter(
    product => {
      return (
        product
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        product
        .category
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  //search
  // const [isNoData, setIsNoData] = useState();

  // const noData = () => {
  //   setIsNoData(!filteredProducts.length)
  // }
  // console.log(isNoData, !filteredProducts.length);

  function searchList() {
    if (searchField !== "") {
      if (!filteredProducts.length) {
        return (
          <div className="text-center my-40">
            <span className="inline-block"><svg className="w-20 h-20" fill="none" stroke="rgb(37,99,235)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
            <p className="text-2xl text-blue-600">No results found</p>
          </div>
        );
      } else {
        return (
          <Scroll>
            <SearchList filteredProducts={filteredProducts} />
          </Scroll>
        );
      }
    }
  }

  return (
    <div className="pb-10">
      <PageTitle key="Search" title={'Search'} />
      {/* <div>
        {noData()}
      </div> */}
      {searchList()}
    </div>
  );
}

export default Search;