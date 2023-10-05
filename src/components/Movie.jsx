import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


export default function Movie({ elem, index }) {
    const [like, setLike] = useState(false)

  return (
    <div className="inline-block w-full md:w-[250px] lg:w-[230px] cursor-pointer relative p-2">
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${elem?.backdrop_path}`} alt={elem.title} />
        <div className="absolute hover:bg-black/80 hover:opacity-100 w-full h-full top-0 left-0 opacity-0 text-white">
            <p className='text-xs font-bold flex justify-center items-center h-full'>{elem?.title}</p>
            <p className="absolute top-4 left-4 text-gray-300">{like? <FaHeart /> : <FaRegHeart /> }</p>
        </div>
    </div>
  )
}
