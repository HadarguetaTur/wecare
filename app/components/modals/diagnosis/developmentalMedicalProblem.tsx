import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '../../input/Input'; // Adjust the import path as needed
import { DEVELOPMENTALMEDICALPROBLEMDATA } from '@/app/static-data/diagnosis-form';
import Heading from '../../heading/Heading'; // Make sure the import path matches your project structure
import { CategoryKey } from '../diagnosisModal';

interface DevelopmentalMedicalProblemProps {
  onNext: (category: CategoryKey , data: object) => void;
}

const DevelopmentalMedicalProblem: React.FC<DevelopmentalMedicalProblemProps> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      breastfed: "",
      bottleFeeding: "",
      emissions: "",
      selfRegulation: "",
      anesthesia: "",
      sleep: "",
      strangerFamilyRecognition: "",
      pregnancyBirthCourse: "",
      medicalProblems: "",
      regularMedication: "",
      visionTests: "",
      hearingTests: "",
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> =async (data) => {
    setIsLoading(true);
    console.log(data);
    let score = 0;
    Object.values(data).forEach(value => {
        if (value === 'Yes') {
            score += 2;
        }
    });
    setIsLoading(false);
    onNext('developmentalMedicalProblem', data);
  };

  return (
    <div className='flex flex-col gap-8 overflow-y-auto max-h-[600px]'>
      <Heading title='Developmental & Medical Problem' subtitle='Detail the developmental and medical history.' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        {DEVELOPMENTALMEDICALPROBLEMDATA.map((item) => (
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
        ))}
        <button type="submit" disabled={isLoading} className="mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DevelopmentalMedicalProblem;