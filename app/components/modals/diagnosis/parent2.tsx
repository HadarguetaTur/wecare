import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../input/Input'; 
import { PARENT2DATA } from '@/app/static-data/diagnosis-form';
import {  CategoryKey } from '../diagnosisModal';
import Heading from '../../heading/Heading';

interface Parent2Props {
    onNext: (category: CategoryKey, data:object) => void;
}

const Parent2: React.FC<Parent2Props> = ({ onNext }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
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
        let score = 0;
        Object.values(data).forEach(value => {
            if (value === 'Yes') {
                score += 2;
            }
        });

        setIsLoading(false);
        onNext('parent2', data); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <Heading
                title='Parent 2'
                subtitle='Further insights into family dynamics'
            />
            {PARENT2DATA.map((item) => (
                <Input
                    key={item.label}
                    id={item.name}
                    label={item.label}
                    disabled={isLoading}
                    errors={errors}
                    register={register}
                    type={item.type} 
                    required
                />
            ))}
            <button type="submit" disabled={isLoading} className="mt-4">
                Submit
            </button>
        </form>
    );
};

export default Parent2;