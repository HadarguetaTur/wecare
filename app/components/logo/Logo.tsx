'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export const Logo=()=> {
    const router= useRouter();
  return (
    <div>
        <Image
        alt='Logo'
        className='hidden md:block cursor-pointer'
        height={50}
        width={50}
        src='/images/logo.svg'
        />
    </div>
  )
}
