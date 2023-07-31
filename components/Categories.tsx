'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { categoryFilters } from "@/constans"

const Categories = () => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const category = searchParams.get('category')

    const handleTags = (filter: string) => {
        router.push(`${pathName}?category=${filter}`)

    }

  return (
    <div className="flexCenter w-full gap-5 flex-wrap z-30 pb-4">
        <ul className="flex gap-4 overflow-auto">
            {categoryFilters.map((filter) => (
                <button
                    key={filter}
                    type='button'
                    onClick={() => handleTags(filter)}
                    className={`${
                        category === filter 
                        ? 'bg-light-white font-medium text-black' :
                        'font-normal bg-black/50'} px-5 py-3 rounded-full  whitespace-nowrap transition-colors duration-300 hover:text-black hover:bg-light-white
                    `}
                    >
                    {filter}
                </button>
            ))}

        </ul>

    </div>
  )
}

export default Categories