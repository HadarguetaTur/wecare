'use client'

import Image from 'next/image'
import React from 'react'
import avatar from '../../../public/images/avatar.png'

const Avatar=() => {
  return (
<Image
className='rounded-full '
height={60}
width={60}
alt='Avatar'
src={avatar}

/>
  )
}

export default Avatar