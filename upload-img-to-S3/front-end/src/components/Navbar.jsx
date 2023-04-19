import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="w-full top-0 z-[1000] flex justify-between items-center h-20 px-8 bg-gray-200 border-b-2 border-gray-500">
        <div className="logo text-[30px] inline-flex text-center">
          <h3 className="text-center">
            <span className="text-red-400">Moment</span>Saver
          </h3>
        </div>
      </header>
    </div>
  )
}

export default Navbar