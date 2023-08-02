'use client'
import Image from "next/image"
import { FormEvent, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"
import Categories from "./Categories"




const SearchBar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const query = searchParams.get('query')
    const initialSearchValue = query || ''
    const [searchValue, setSearchValue] = useState(initialSearchValue)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`${pathname}?query=${searchValue}`)
    }

    const handleCancel = () => {
      setSearchValue('')
    }
  
  return (
    <div className="flex flex-col">
        <div className="h-[80px] bg-[#f3f3f4]">
        </div>
        <div className="flex flex-col after:justify-center items-center px-4">
            <div className="relative -translate-y-2/4 max-w-[628px] w-full">
                <Image 
                src='/magnifying-glass.svg'
                width={16}
                height={16}
                alt='magnifying glass'
                className='absolute h-full m-auto left-6 opacity-60 z-40 '
                />
                {searchValue && <Image 
                src='/IcBaselineCancel.svg'
                width={20}
                height={20}
                alt='calcel'
                className='absolute h-full m-auto right-6 opacity-40 z-40 cursor-pointer'
                onClick={handleCancel}
                />}
                <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      required
                      className=" py-4 pl-16 pr-6 rounded-md shadow-[0_4px_20px_rgb(0,0,0,0.08)] h-[64px] w-full focus:outline-0"
                    />
                </form>
            </div>
            <h3 className="text-3xl font-bold text-black text-center mb-4">{query}</h3>
            <p className="text-gray text-center mb-8">10,000+ of the best {query} designs for inspiration</p>     
        </div>
        <Categories />
</div>
  )
}

export default SearchBar