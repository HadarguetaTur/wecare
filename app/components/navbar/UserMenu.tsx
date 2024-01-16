'use client'

import React, {useState, useCallback} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Links from './Links'
import Search from './Search'
import Avatar from '../avatar/Avatar'
import OpenMenu from './OpenMenu'

const UserMenu = () => {
    const [isOpen, setIsOpen]= useState(false)

    const toggleOpen = useCallback(()=>{
        setIsOpen((value)=>!value);
    },[])

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-8 w-full'>
                <Search />
                <div className='hidden md:block'>
                    <Links />
                </div>
                <div
                    onClick={toggleOpen}
                    className='
                    p-4
                    md:p-1
                    md:px-1
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-2
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
            '
                >
                    <AiOutlineMenu size={18} />
                    <div className='hidden md:block'>
                        <Avatar/>
                    </div>
                </div>
            </div>
            {isOpen &&(
                <OpenMenu/>
            )}
        </div>
    )
}

export default UserMenu