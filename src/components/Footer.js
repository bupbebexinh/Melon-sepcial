import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-white bg-gradient-to-r from-blue-300 to-blue-600 p-4">&copy;{(new Date().getFullYear())} The Melon Special.</div>
    </footer>
  )
}
export default Footer