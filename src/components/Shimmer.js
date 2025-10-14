import React from 'react';

function Shimmer() {
  return (
    <div className='shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto'>
      <div className='shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl h-80 animate-pulse shadow-lg'></div>
       <div className='shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl h-80 animate-pulse shadow-lg'></div>
        <div className='shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl h-80 animate-pulse shadow-lg'></div>
         <div className='shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl h-80 animate-pulse shadow-lg'></div>
    </div>
  )
}

export default Shimmer