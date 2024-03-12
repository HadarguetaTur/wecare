import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '../../input/Input'; // Adjust the import path as needed
import { FUNCTIONALPROBLEMDATA } from '@/app/static-data/diagnosis-form'; // Define this array accordingly
import Heading from '../../heading/Heading'; // Make sure the import path matches your project structure
import { CategoryKey } from '../diagnosisModal';

interface FunctionalProblemProps {
  onNext: (category: CategoryKey, data: object) => void;
}

const FunctionalProblem: React.FC<FunctionalProblemProps> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      sitting: "",
      eatingWithSpoon: "",
      eatingPuree: "",
      eatingSolids: "",
      independentEating: "",
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    let score = 0;
    Object.values(data).forEach(value => {
      if (value === 'Yes') {
        score += 2;
      }
    });
    setIsLoading(false);
    onNext('functionalProblem', data);
  };

  return (
    <div className='flex flex-col gap-8'>
      <Heading title='Functional Problem' subtitle='Detail the functional history and issues.' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        {FUNCTIONALPROBLEMDATA.map((item) => (
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

export default FunctionalProblem;