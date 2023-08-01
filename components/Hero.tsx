'use client'
import React, { ChangeEvent, FormEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react"
import Categories from "./Categories"
import { trendingSearch } from '@/constans';
import Image from 'next/image'


const Hero = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    router.push(`/search?query=${searchValue}`)

  }

  const handleTrendingSearch = (value: string) =>{
    router.push(`/search?query=${value}`)
  }

  return (
    <section className='w-full h-[680px] md:h-[560px] flex flex-col gap-8 items-center bg-black text-white relative overflow-hidden py-12'>
    <Categories />
    <div className='z-30 flex flex-col gap-6 px-4'>
    <h3 className='text-2xl md:text-3xl font-extrabold max-w-[500px] mx-auto text-center'>Explore the world’s leading design portfolios</h3>
    <p className='text-sm md:text-base max-w-[650px] mx-auto text-center leading-7'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
    </div>
    <div className="z-30 relative max-w-[600px] w-full px-4">

      <Image 
        src='magnifying-glass.svg'
        width={16}
        height={16}
        alt='magnifying glass'
        className='absolute h-full m-auto left-9 opacity-60 z-40'
      />
    <form onSubmit={handleSubmit}>
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
      <ul className='flex flex-wrap gap-3 z-30 items-center justify-center px-4 pt-4'>      
      <p className='text-xs'>Trending searches</p>
        {trendingSearch.map((value: string) => (<li onClick={() => handleTrendingSearch(value)} className='text-sm border border-[rgba(255,255,255,0.6)] px-4 py-1 rounded-full hover:border-white transition-all duration-500 cursor-pointer'>{value}</li>))}
        </ul>
      <div className='absolute inset-0'>
          <video loop autoPlay muted className='w-full h-full object-cover opacity-40'>
            <source src="/49dbf46eae15d227fc95a69cee31251e.mp4" type="video/mp4" />
            Failed to load video.
          </video>
        </div>
    </section>
  )
}

export default Hero