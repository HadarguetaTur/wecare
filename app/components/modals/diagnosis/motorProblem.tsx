import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '../../input/Input'; // Ensure the import path is correct
import { MOTORPROBLEMDATA } from '@/app/static-data/diagnosis-form'; // Define this array accordingly
import Heading from '../../heading/Heading'; // Ensure the import path is correct
import {  CategoryKey } from '../diagnosisModal';

interface MotorProblemProps {
  onNext: (category: CategoryKey, data:object) => void;
}

const MotorProblem: React.FC<MotorProblemProps> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      liftingHead: "",
      flipping: "",
      bellyCrawl: "",
      sixCrawl: "",
      standingUp: "",
      walkingWithSupport: "",
      independentWalking: "",
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
    onNext('motorProblem' , data);
  };

  return (
    <div className='flex flex-col gap-8'>
      <Heading title='Motor Problem' subtitle='Detail the motor history and issues.' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        {MOTORPROBLEMDATA.map((item) => (
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

export default MotorProblem;