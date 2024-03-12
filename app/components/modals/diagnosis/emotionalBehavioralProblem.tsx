import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '../../input/Input'; // Adjust the import path as needed
import { EMOTIONALBEHAVIORALPROBLEMDATA } from '@/app/static-data/diagnosis-form';
import Heading from '../../heading/Heading'; // Make sure the import path matches your project structure
import {  CategoryKey } from '../diagnosisModal';

interface EmotionalBehavioralProblemProps {
  onNext: (category:  CategoryKey, data: object) => void;
}

const EmotionalBehavioralProblem: React.FC<EmotionalBehavioralProblemProps> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      sensoryStimuliSensitivity: "",
      playingAlone: "",
      laughOutLoud: "",
      responseToVoice: "",
      responseToName: "",
      makingEyeContact: "",
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
    onNext('emotionalBehavioralProblem', data);
  };

  return (
    <div className='flex flex-col gap-8'>
      <Heading title='Emotional & Behavioral Problem' subtitle='Detail the emotional and behavioral history.' />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        {EMOTIONALBEHAVIORALPROBLEMDATA.map((item) => (
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

export default EmotionalBehavioralProblem;