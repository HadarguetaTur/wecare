'use client'

import React from 'react'
import Link from 'next/link'
import { IoIosChatboxes, IoIosNotifications,IoIosBook } from 'react-icons/io';
import { FaUsers,FaHome} from 'react-icons/fa';

function Links() {
  return (
    <div className='flex jusify-between items-center gap-8 '>
    <Link href='/' 
        className='
        hidden
        md:block
        text-sm
        font-semibold
        py-3
        px-4
        rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer
        '  
    
    >
        <IoIosChatboxes size={24} color="gray" />
    </Link>
    <Link href='/'
            className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            '  
    >
        <IoIosNotifications size={24} color="gray" />
    </Link>
    <Link href='/'
            className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            '  
    >
        <FaUsers size={24} color="gray"/>
    </Link>
    <Link href='/'
            className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            '  
    >
        <FaHome size={24} color="gray"/>
    </Link>
</div>
  )
}

export default Links