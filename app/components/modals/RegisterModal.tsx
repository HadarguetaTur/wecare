'use client'
import React from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { FiInstagram } from 'react-icons/fi'
import { useCallback, useState } from 'react'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../heading/Heading'
import Input from '../input/Input'
import toast from 'react-hot-toast/headless'
import Button from '../button/Button'
import useLoginModal from '@/app/hooks/useLoginModal'

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal=useLoginModal()
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('somthing wrong');
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Wecare'
                subtitle='Create an account!'
                center={true}
            />
            <Input
                id="email"
                label='Email'
                disabled={isLoading}
                errors={errors}
                register={register}
                required

            />
            <Input
                id="name"
                label='Name'
                disabled={isLoading}
                errors={errors}
                register={register}
                required

            />
            <Input
                id="password"
                label='Password'
                type='password'
                disabled={isLoading}
                errors={errors}
                register={register}
                required

            />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label='Continue with Instegram'
                icon={FiInstagram}
                onClick={() => { }}
            />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={loginModal.onOpen} className='text-neutral-800 cursor-pointer hover:underline '>
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            title='Register'
            actionLabel='Continue'
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}

        />
    )
}

export default RegisterModal