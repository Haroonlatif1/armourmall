import React, { useContext } from 'react'
import CardsMap from './cardsmap2'
import Parallelogram from '../paralleogram'
import { contextz } from '../context'

const Rifles = () => {
 const bb=useContext(contextz)
 const {PaginatedProducts}=bb
  return (<>
  <Parallelogram/>
    <div  className="container mt-4 pb-2" >
      <CardsMap p={PaginatedProducts}/>
      
    </div></>
  )
}

export default Rifles