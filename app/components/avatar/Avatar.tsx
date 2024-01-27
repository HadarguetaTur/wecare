'use client'

import Image from 'next/image'
import React from 'react'
import avatar from '../../../public/images/avatar.png'

interface AvatarProps {
  src? : string | null | undefined;
}

const Avatar: React.FC<AvatarProps>=({
  src
}) => {
  return (
<Image
className='rounded-full '
height={60}
width={60}
alt='Avatar'
src={src || avatar}

/>
  )
}

export default Avatar