'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { categoryFilters } from "@/constans"

const Categories = () => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    console.log(pathName)

    const category = searchParams.get('category')
    const search = searchParams.get('query')

    const handleTags = (filter: string) => {

        const newPath = search ? `${pathName}?category=${filter}&query=${search}` : `${pathName}?category=${filter}`

        router.push(newPath)

    }

  return (
    <div className="flexCenter w-full gap-5 flex-wrap z-30 pb-4">
        <ul className="flex gap-4 overflow-auto m-2 pb-1">
            {categoryFilters.map((filter) => (
                <button
                    key={filter}
                    type='button'
                    onClick={() => handleTags(filter)}
                    className={
                        pathName === '/search'
                        ? `${
                            category === filter
                            ? 'font-medium bg-[#f8f7f4]'
                            : 'bg-white'
                        } text-sm rounded-md py-2 px-3 hover:opacity-80 transition-opacity transition-colors duration-400`
                        : `${
                            category === filter
                            ? 'bg-light-white font-medium text-black' // If category is equal to filter
                            : 'font-normal bg-black/50' // If category is not equal to filter
                          } px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 hover:text-black hover:bg-light-white text-sm md:text-base md:px-5 md:py-3`
                    }
                    >
                    {filter}
                </button>
            ))}

        </ul>

    </div>
  )
}

export default Categories