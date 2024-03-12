'use client'

import React, { useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Links from './Links'
import Search from './Search'
import Avatar from '../avatar/Avatar'
import OpenMenu from './OpenMenu'
import { User } from '@prisma/client'
import MenuItems from './MenuItems'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { signOut } from 'next-auth/react'
import useDiagnosisModal from '@/app/hooks/diagnosis'

interface UserMenuProps {
    currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState(false)
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const diagnosisModal= useDiagnosisModal()
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onDiagnosis = useCallback(()=>{
        if(!currentUser){
            return loginModal.onOpen()
        }
        diagnosisModal.onOpen()


    },[currentUser,loginModal])

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
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {isOpen && (
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
                        {currentUser ? (
                            <>
                                <MenuItems
                                    onClick={onDiagnosis}
                                    label='Smart diagnostic'
                                />
                                <MenuItems
                                    onClick={()=>{}}
                                    label='Profile'
                                />
                                <MenuItems
                                    onClick={()=>{}}
                                    label='my communities'
                                />
                                <MenuItems
                                    onClick={()=>signOut()}
                                    label='Logout'
                                />
                            </>
                        ) :
                            (
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


                            )}

                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu