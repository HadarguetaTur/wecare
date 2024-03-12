import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import Input from '../../input/Input'; 
import { OTHERCHILDRENDATA } from '@/app/static-data/diagnosis-form'; // Ensure you have this data structure defined
import {  CategoryKey } from '../diagnosisModal';
import Heading from '../../heading/Heading';

interface OtherChildrenProps {
  onNext: (category:  CategoryKey , data: object) => void;
  brothers: number;
}

const OtherChildren: React.FC<OtherChildrenProps> = ({ onNext, brothers }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FieldValues>({
      defaultValues: {
          brothers: Array(brothers).fill(null).map(() => ({
            name:"",
            dateOfBirth:"",
            gender:"",
            healthDevelopmentalProblems:""
          }))
      }
  });

  const { fields } = useFieldArray({
      control,
      name: "brothers",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      console.log(data);

      setIsLoading(false);
      onNext('otherChildren',{data}); 
  };

  return (
      <div className='flex flex-col gap-8 overflow-y-auto max-h-[600px] '>
          <Heading title='Other Children' subtitle='Additional information about siblings or other children.' />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 overflow-x-auto">
    {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-4">
            <h3>Brother {index + 1}</h3>
            <input 
                {...register(`brothers.${index}.name`)}
                placeholder="Name"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
            />
            <input 
                {...register(`brothers.${index}.dateOfBirth`)}
                placeholder="Date of Birth"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} // Replace with your actual input CSS class
                type="date"
            />
            <select 
                {...register(`brothers.${index}.gender`)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" // Replace with your actual select CSS class
            >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <textarea 
                {...register(`brothers.${index}.healthDevelopmentalProblems`)}
                placeholder="Health and Developmental Problems"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" // Replace with your actual textarea CSS class
            />
        </div>
    ))}
    <button type="submit" disabled={isLoading} className="submit-button-class">
        Submit
    </button>
</form>
      </div>
  );
};

export default OtherChildren;