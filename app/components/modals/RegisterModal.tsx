'use client'
import React from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { FiInstagram } from 'react-icons/fi'
import { useCallback, useState } from 'react'
import {
    FieldValues,
    SubmitHandler,
    useForm,
    useWatch
} from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../heading/Heading'
import Input from '../input/Input'
import toast from 'react-hot-toast/headless'
import Button from '../button/Button'
import useLoginModal from '@/app/hooks/useLoginModal'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            isCareProvider: false,
            description: '',

        }
    });

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen()

    },[loginModal,registerModal])

    const isCareProvider = useWatch({
        control,
        name: 'isCareProvider',
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);


        axios.post('/api/register', data)
            .then((newUser) => {
                registerModal.onClose();
                if(data.isCareProvider){
                   console.log(newUser);

                   

                }
            })
            .catch((error) => {
                toast.error(error.message);


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
            <Input
                id="isCareProvider"
                label='Are you a care provider?'
                type='checkbox'
                disabled={isLoading}
                errors={errors}
                register={register}

            />
            {isCareProvider && (
                <>
                    <select
                        {...register('category', { required: true })}
                        disabled={isLoading}
                        className='w-full p-2 border-2 rounded-md'
                    >
                        <option value="">Select Field</option>
                        <option value="occupationalTherapy">Occupational Therapy</option>
                        <option value="developmentalMedicine">Developmental Medicine</option>
                        <option value="pediatricPsychology">Pediatric Psychology</option>
                        <option value="speechLanguageTherapy">Speech and Language Therapy</option>
                        <option value="specialEducation">Special Education</option>
                        <option value="pediatricNutrition">Pediatric Nutrition</option>
                        <option value="earlyChildhoodEducation">Early Childhood Education</option>
                        <option value="childPsychiatry">Child Psychiatry</option>
                        <option value="pediatricPhysicalTherapy">Pediatric Physical Therapy</option>
                        <option value="behavioralTherapy">Behavioral Therapy</option>
                        <option value="childLifeSpecialist">Child Life Specialist</option>
                        <option value="socialWorkPediatrics">Social Work in Pediatrics</option>
                        <option value="developmentalBehavioralPediatrics">Developmental Behavioral Pediatrics</option>
                        <option value="pediatricNeurology">Pediatric Neurology</option>
                        <option value="childDevelopmentalResearch">Child Developmental Research</option>
                        <option value="playTherapy">Play Therapy</option>
                        <option value="familyTherapy">Family Therapy</option>
                        <option value="pediatricOccupationalHealth">Pediatric Occupational Health</option>
                        <option value="earlyInterventionServices">Early Intervention Services</option>
                    </select>
                    <Input
                        id="description"
                        label='Describe your expertise'
                        disabled={isLoading}
                        errors={errors}
                        register={register}
                        required

                    />
                </>
            )}


        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
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
                    <div onClick={toggle} className='text-neutral-800 cursor-pointer hover:underline '>
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