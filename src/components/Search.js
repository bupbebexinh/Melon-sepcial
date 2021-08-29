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

  // console.log(filteredProducts);
  
  // if(searchField===""){
  //   setSearchShow(false);
  // }
  // else {
  //   setSearchShow(true);
  // }
  // console.log(searchShow, searchField);

  // const handleChange = e => {
  //   setSearchField(e.target.value);
  //   if(e.target.value===""){
  //     setSearchShow(false);
  //   }
  //   else {
  //     setSearchShow(true);
  //   }
  // };

  function searchList() {
    if (searchField !== "") {
      return (
        <Scroll>
          <SearchList filteredProducts={filteredProducts} />
        </Scroll>
      );
    }
  }

  return (
    <div className="pb-10">
      <PageTitle key="Search" title={'Search'} />
      {/* <div className="pa2">
        <input 
          className="text-black md:w-3/6 block"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div> */}
      {searchList()}
    </div>
  );
}

export default Search;