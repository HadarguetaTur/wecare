'use client'
import React from 'react'
import MenuItems from './MenuItems'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal';

function OpenMenu() {
    const registerModal=useRegisterModal();
    const loginModal=useLoginModal()
    return (
        <div className='
    absolute
    rounded-xl
    shadow-md
    w-[40vw]
    md:w-3/4
    bg-white
    overflow-hidden
    right-0
    top-12
    text-sm
    '>
            <div className='flex flex-col cursor-pointer'>
                <>
                    <MenuItems
                    onClick={loginModal.onOpen}
                    label='Login'
                    />
                    <MenuItems
                    onClick={registerModal.onOpen}
                    label='Sign up'
                    />
                </>
            </div>
        </div>
    )
}

export default OpenMenu