'use client'

import React, { ReactElement, useCallback, useMemo, useState } from 'react'
import Modal from './Modal'
import useDiagnosisModal from '@/app/hooks/diagnosis'
import CommunicationProblem from './diagnosis/communicationProblem'
import GeneralData from './diagnosis/generalData'
import Parent1 from './diagnosis/parent1'
import Parent2 from './diagnosis/parent2'
import OtherChildren from './diagnosis/otherChildren'
import EmotionalBehavioralProblem from './diagnosis/emotionalBehavioralProblem'
import FunctionalProblem from './diagnosis/functionalProblem'
import MotorProblem from './diagnosis/motorProblem'
import DevelopmentalMedicalProblem from './diagnosis/developmentalMedicalProblem'
import axios from 'axios'
import toast from 'react-hot-toast'
import { User } from '@prisma/client'
import { redirect, useRouter } from 'next/navigation'


enum STEPS {
  GENERAL = 0,
  PARENT1 = 1,
  PARENT2 = 2,
  OTHERCHILDREN = 3,
  COMMUNICATION = 4,
  EMOTIONALBEHAVIORALPROBLEM = 5,
  FUNCTIONALPROBLEM = 6,
  MOTORPROBLEM = 7,
  DEVELOPMENTALMEDICALPROBLEM = 8,
  DIAGNOSISANSWER=9,
}

interface ScoreState {
  motorProblem: number;
  functionalProblem: number;
  emotionalBehavioralProblem: number;
  developmentalMedicalProblem: number;
  communicationProblem: number;
  generalProblem: number;
  parent1: number;
  parent2: number;
  otherChildren: number;
}

export interface DiagnosisState {
  motorProblem: object;
  functionalProblem: object;
  emotionalBehavioralProblem: object;
  developmentalMedicalProblem: object;
  communicationProblem: object;
  generalProblem: object;
  parent1: object;
  parent2: object;
  otherChildren: Array<object>;
}


let diagnosisState:DiagnosisState  = {
  motorProblem: {},
  functionalProblem: {},
  emotionalBehavioralProblem: {},
  developmentalMedicalProblem: {},
  communicationProblem: {},
  generalProblem: {},
  parent1: {},
  parent2: {},
  otherChildren: [],
}

let initialScores:ScoreState = {
  motorProblem: 0,
  functionalProblem: 0,
  emotionalBehavioralProblem: 0,
  developmentalMedicalProblem: 0,
  communicationProblem: 0,
  generalProblem:0,
  parent1:0,
  parent2: 0,
  otherChildren: 0,
};

export type CategoryKey = keyof typeof diagnosisState;

interface DiagnosisProps{
  currentUser?:User| null;
}

const DiagnosisModal: React.FC<DiagnosisProps> = ({currentUser}) => { 
  const diagnosisModal = useDiagnosisModal();
  const router= useRouter()
  const [step, setStep] = useState(STEPS.GENERAL);
  const [scores, setScores] = useState(initialScores);
  const [diagnosisData, setDiagnosisData] = useState(diagnosisState);
  const [siblings, setSiblings] = useState(0);
  const [age, setAge] = useState(0);


  const updateDiagnosisData = useCallback((category: CategoryKey, data: object) => {
    setDiagnosisData((prevData) => ({
      ...prevData,
      [category]: data,
    }));
  }, []);



  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = useCallback(() => {


    if (step === STEPS.DEVELOPMENTALMEDICALPROBLEM) {
      const updatedData = {
        ...diagnosisData,
        userId: currentUser?.id, 
      };     
      axios.post('/api/diagnosis',updatedData)
      .then((responses) => {
        console.log(responses.data);
        router.push(`/diagnosis/${responses.data.id}`)
        
        
      
      })
      .catch((error) => {
          toast.error(error.message);


      })
      .finally(() => {

      })


    } else {
      setStep((prevStep) => prevStep + 1);
      console.log(step);
    }
  }, [step, scores]);





  const actionLabel = useMemo(() => {
    if (step === STEPS.DEVELOPMENTALMEDICALPROBLEM) {
      return 'Create'
    }
    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.GENERAL) {
      return 'undefined'
    }
    return 'Back'
  }, [step]);

  const renderStepContent = (): ReactElement | undefined | null => {
    switch (step) {
      case STEPS.GENERAL:
        return <GeneralData setAge={setAge} onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />;
      case STEPS.PARENT1:
        return <Parent1 setSiblings={setSiblings} onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.PARENT2:
        return <Parent2 onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.OTHERCHILDREN:
        return <OtherChildren brothers={siblings} onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.COMMUNICATION:
        return <CommunicationProblem onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />;
      case STEPS.EMOTIONALBEHAVIORALPROBLEM:
        return <EmotionalBehavioralProblem onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.FUNCTIONALPROBLEM:
        return <FunctionalProblem onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.MOTORPROBLEM:
        return <MotorProblem onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      case STEPS.DEVELOPMENTALMEDICALPROBLEM:
        return <DevelopmentalMedicalProblem onNext={(category, data) => { updateDiagnosisData(category as CategoryKey, {data}) }} />
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={diagnosisModal.isOpen}
      onClose={diagnosisModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.GENERAL ? undefined : onBack}
      title='Welcome to the Smart Diagnostics'
      body={renderStepContent()}

    />
  )
}

export default DiagnosisModal