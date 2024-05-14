import React, { useContext } from 'react'
import CardsMap from './cardsmap2'
import Parallelogram from '../paralellogram2'
import { contextz } from '../context'

const Rifles = () => {
 const bb=useContext(contextz)
 const {PaginatedProducts1}=bb
  return (<>
  <Parallelogram/>
    <div  className="container mt-4 pb-2" >
      <CardsMap p={PaginatedProducts1}/>
      
    </div></>
  )
}

export default Rifles