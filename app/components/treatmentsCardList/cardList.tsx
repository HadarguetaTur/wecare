import { Treatments } from '@prisma/client';
import React from 'react'
import Container from '../container/Container';
import CardPreview from './cardPreview';

interface CardListProps{
   cardList ?:Treatments[]| null|undefined ;
}

const CardList: React.FC<CardListProps>=({cardList})=> {
  return (
    <Container>
    <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
      {cardList?.map((item, index) => (
        <CardPreview key={index} card={item} />
      ))}
    </div>
  </Container>
  )
}

export default CardList