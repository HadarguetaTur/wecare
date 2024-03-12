import { GENERALDATA } from '@/app/static-data/diagnosis-form';
import Input from '../../input/Input';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '../../heading/Heading';
import {  CategoryKey } from '../diagnosisModal';

interface GeneralDataProps {
    onNext: (category:  CategoryKey, data:object) => void;
    setAge: (value: number) => void;
}

const GeneralData: React.FC<GeneralDataProps> = ({ onNext, setAge }) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            reasonForReferral: "",
            symptoms: "",
            gender: "",
            educationalSetting: "",
            dateOfBirth: "",
            name: "",
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const calculateAndAdvance: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        console.log(data);

        const birthDate = new Date(data.dateOfBirth);
        const age = calculateAge(birthDate);
        setAge(age);
        let score = 0;
        Object.values(data).forEach(value => {
            if (value === 'Yes') {
                score += 2;
            }
        });
        setIsLoading(false);
        console.log(data);
        
        onNext('generalProblem',  data);
    };


    const calculateAge = (birthDate: Date) => {
        console.log('calculateAge', birthDate);

        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className='flex flex-col gap-8'>
            <Heading
                title='General'
                subtitle='Lets start with general information'
            />
            <form onSubmit={handleSubmit(calculateAndAdvance)} className='flex flex-col gap-8'>
                <div className='flex flex-col gap-8'>
                    {GENERALDATA.map((item) => {
                        if (item.options) {
                            return (
                                <Input
                                    key={item.name}
                                    id={item.name}
                                    label={item.label}
                                    disabled={isLoading}
                                    errors={errors}
                                    register={register}
                                    options={item.options}
                                    type={item.type}
                                />
                            );
                        }
                        return (
                            <Input
                                key={item.name}
                                id={item.name}
                                label={item.label}
                                disabled={isLoading}
                                errors={errors}
                                register={register}
                                type={item.type}
                            />
                        );
                    })}
                </div>
                <button type="submit" disabled={isLoading} className="mt-4">
                    Submit
                </button>
            </form>
        </div>

    )
}

export default GeneralData