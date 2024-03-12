
import getTreatmentsByCategory from '@/app/actions/getCategory';
import getCurrentDiagnosis from '@/app/actions/getCurrentDiagnosis'
import Container from '@/app/components/container/Container';
import CardList from '@/app/components/treatmentsCardList/cardList';
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {

  const diagnosis = await getCurrentDiagnosis(params.id)
  console.log(diagnosis?.highestScoringCategory);
  const treatments = await getTreatmentsByCategory(diagnosis?.highestScoringCategory)
console.log(treatments);




  return (
    <div className='pt-40 font-bold text-2xl text-neutral-500 mt-2'>
      <Container >
        <div dangerouslySetInnerHTML={{ __html: diagnosis?.diagnosisContent || '' }} />
        <CardList cardList={treatments} />
      </Container>

    </div>
  )


}

export default Page


