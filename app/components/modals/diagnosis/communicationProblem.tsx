import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../input/Input';
import { COMMUNICATIONPROBLEMDATA } from '@/app/static-data/diagnosis-form';
import { CategoryKey } from '../diagnosisModal';
import Heading from '../../heading/Heading';

interface CommunicationProblemProps {
    onNext: (category: CategoryKey, data:object) => void;
}

const CommunicationProblem: React.FC<CommunicationProblemProps> = ({ onNext }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            reachingOutToTheGame: "",
            handToHand: "",
            circleTwoObject: "",
            clap: "",
            murmuring: "",
        }
    });

    const [isLoading, setIsLoading] = useState(false);


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        console.log(data);


        setIsLoading(false);
        onNext('communicationProblem', data);
    };

    return (
        <div className='flex flex-col gap-8 overflow-y-auto max-h-[600px]'> 
            <Heading title='Communication Problem' subtitle='Evaluate communication capabilities.' />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                {COMMUNICATIONPROBLEMDATA.map((item) => (
                    <Input
                        key={item.name}
                        id={item.name}
                        label={item.label}
                        disabled={isLoading}
                        errors={errors}
                        register={register}
                        options={item.options}
                        type={item.type}
                        required
                    />
                ))}
                <button type="submit" disabled={isLoading} className="mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommunicationProblem;