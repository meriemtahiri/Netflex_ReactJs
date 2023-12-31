import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


export default function Row( {rowID, category , fetchURL} ) {
    const [movies, setMovies] = useState([])


  useEffect(()=>{
    axios.get(fetchURL)
    .then((res)=>{
      setMovies(res.data.results)
    })
  }, [fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
<>

<h1 className='text-white font-bold md:text-xl p-4'>{category}</h1>
<div className="relative flex items-center group">

<MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

<div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
    {movies.map((elem, index) => {
        return <Movie elem={elem} key={index}/>
    })}
</div>

<MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

</div>

</>
)
}
