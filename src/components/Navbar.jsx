import React from 'react'

const Navbar = ({header,searchVisible,backButton,className=""}) => {
  return (
    <div
      className={` flex flex-row items-center justify-between gap-3 p-2  `}
    >
      <h1 className={` ${className} font-semibold whitespace-nowrap `}>
        {header}
      </h1>
      {searchVisible && (
        <input
          className="bg-white rounded-2xl mt-2 mr-2 text-black p-2 shadow "
          type="text"
          placeholder=" Search..."
        />
      )}
      {backButton && (
        <button className="bg-orange-400 text-white p-2 rounded-lg">
          back
        </button>
      )}
    </div>
  );
}

export default Navbar
