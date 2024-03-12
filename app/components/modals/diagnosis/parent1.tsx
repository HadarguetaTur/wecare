import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../input/Input';
import { PARENT1DATA } from '@/app/static-data/diagnosis-form';
import {  CategoryKey } from '../diagnosisModal';
import Heading from '../../heading/Heading';

interface Parent1Props {
    onNext: (category:  CategoryKey, data:object) => void;
    setSiblings: (value: number) => void;
}

const Parent1: React.FC<Parent1Props> = ({ onNext, setSiblings }) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            maritalStatus: "",
            siblings: 0,
            countryOfBirthParent1: "",
            yearOfBirthParent1: "",
            yearsOfEducationParent1: 0,
            workParent1: "",
            healthIssuesParent1: "",
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);


        const siblingsCount = parseInt(data.siblings, 10) || 0; 
        setSiblings(siblingsCount);

        let score = 0;
        Object.values(data).forEach(value => {
            if (value === 'Yes') {
                score += 2;
            }
        });

        setIsLoading(false);
        onNext('parent1', data);
    };

    return (
        <div className='flex flex-col gap-8'>
            <Heading
                title='Parent 1'
                subtitle='Because the parents are to blame for everything ;)'
            />
            <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                {PARENT1DATA.map((item) => (
                    <Input
                        key={item.label}
                        id={item.name}
                        label={item.label}
                        disabled={isLoading}
                        errors={errors}
                        register={register}
                        options={item.options} // Assuming options is an array of { value: string, label: string }
                        type={item.type}
                    />
                ))}
                <button type="submit" disabled={isLoading} className="mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Parent1;
