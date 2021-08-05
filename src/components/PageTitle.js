import React from 'react'

const PageTitle = (e) => {
  const title_text = e.title;
  return (
    <>
      <h1 className="pt-10 text-center font-bold text-yellow-600 text-4xl">{title_text}</h1>
    </>
  )
}

export default PageTitle
