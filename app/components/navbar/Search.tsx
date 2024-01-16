'use claient'

import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="border-[1px] w-full  py-1 shadow-sm hover:shadow-md rounded-full transition cursor-pointer">
            <div className='flex flex-row items-center justify-between mx-1'>
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm font-semibold px-6 outline-none"
                />
                <div className='p-2 bg-rose-500 rounded-full text-white'>
                    <BiSearch size={18} />
                </div>
            </div>
        </div>
    )
}

export default Search