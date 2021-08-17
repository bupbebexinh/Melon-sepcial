import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-white bg-blue-900 p-4">&copy;{(new Date().getFullYear())} The Melon Special.</div>
    </footer>
  )
}
export default Footer