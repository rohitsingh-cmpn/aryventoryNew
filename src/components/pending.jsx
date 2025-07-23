import { FaTruck, FaQuestionCircle } from 'react-icons/fa';

import React from 'react'

function Pending() {
  return (
    
      <div className="flex flex-col h-[300px] w-full bg-white rounded-xl shadow p-4 gap-6">
      <div className="">
        <div className="h-1/2  relative items-center gap-4  bg-amber-300 p-4 rounded-lg">
          <div className="bg-yellow-300 p-2 absolute top-2 right-2 rounded">
            <FaTruck className="text-white" />
          </div>
          <div className="flex flex-col absolute left-4 bottom-4">
            <p className="text-gray-600 text-sm">Pending Delivery</p>
            <p className="text-xl font-bold">80</p>
          </div>
        </div>
        <div className="h-full relative items-center gap-4  bg-amber-300 p-4 rounded-lg">
          <div className="bg-yellow-300 p-2 absolute top-2 right-2 rounded">
            <FaQuestionCircle className="text-white" />
          </div>
          <div className="flex flex-col absolute left-4 bottom-4">
            <p className="text-gray-600 text-sm">Pending Request</p>
            <p className="text-xl font-bold">120</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pending