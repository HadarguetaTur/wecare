
import getAlltreatments from "./actions/getAlltreatments";
import Container from "./components/container/Container";
import CardList from "./components/treatmentsCardList/cardList";


export default async function  Home() {
  const alltreatments= await getAlltreatments()
  console.log(alltreatments);
  

  
  return (
    <div className='py-40  h-full'>
      <CardList cardList={alltreatments}/>

    </div>
  )
}
