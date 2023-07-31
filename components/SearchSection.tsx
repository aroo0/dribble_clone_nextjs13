'use client'
import React, { ChangeEvent } from 'react';
import { useState } from "react"
import Categories from "./Categories"
import { trendingSearch } from '@/constans';
import Image from 'next/image'


const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <section className='w-full h-[680px] md:h-[560px] flex flex-col gap-12 items-center justify-center bg-black text-white relative overflow-hidden pad'>
    <Categories />
    <div className='z-30 flex flex-col gap-6'>
    <h3 className='text-3xl font-extrabold max-w-[500px] mx-auto text-center'>Explore the world’s leading design portfolios</h3>
    <p className='max-w-[650px] mx-auto text-center'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
    </div>
    <div className="z-30 relative max-w-[600px] w-full">

      <Image 
        src='magnifying-glass.svg'
        width={16}
        height={16}
        alt='magnifying glass'
        className='absolute h-full m-auto left-5 opacity-60 z-40'
      />
    <form >
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          required
          className="py-4 px-14 rounded-full w-full text-black focus:outline-0 search_focus-shadow opacity-95 hover:opacity-100 focus:opacity-100 transition-opacity duration-500"

        />
      </form>
      </div>
      <div className='flex gap-4 z-30 items-center'>
      <p className='text-xs'>Trending searches</p>
      <ul className='flex gap-3'>{trendingSearch.map((value: string) => (<li className='text-sm border border-[rgba(255,255,255,0.6)] px-4 py-1 rounded-full hover:border-white transition-all duration-500'>{value}</li>))}
        </ul>

      </div>
      <div className='absolute inset-0'>
          <video loop autoPlay muted className='w-full h-full object-cover opacity-40'>
            <source src="/49dbf46eae15d227fc95a69cee31251e.mp4" type="video/mp4" />
            Failed to load video.
          </video>
        </div>
    </section>
  )
}

export default SearchSection