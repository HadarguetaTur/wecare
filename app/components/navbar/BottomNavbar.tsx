'use client'

import React from 'react'
import Container from '../container/Container'
import Link from 'next/link'
import { IoIosChatboxes, IoIosNotifications } from 'react-icons/io';
import { FaUsers , FaHome } from 'react-icons/fa';


const BottomNavbar = () => {
    return (
        <div className='fixed bottom-0 w-full bg-white z-10 shadow-sm block
    md:hidden'>
            <div className='py-4 border-t-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-center gap-8 '>
                   
                            <Link href='/'
                                className='
        block
        md:hidden
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
            block
            md:hidden
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
            block
            md:hidden
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
                                <FaUsers size={24} color="gray" />
                            </Link>
                            <Link href='/'
            className='
            block
            md:hidden
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
                </Container>
            </div>
        </div>
    )
}

export default BottomNavbar