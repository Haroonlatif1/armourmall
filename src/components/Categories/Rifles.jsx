import React, { useContext } from 'react'
import CardsMap from './cardsmap2'
import Parallelogram from '../paralellogram3'
import { contextz } from '../context'

const Rifles = () => {
 const bb=useContext(contextz)
 const {PaginatedProducts3}=bb
  return (<>
  <Parallelogram/>
    <div  className="container mt-4 pb-2" >
      <CardsMap p={PaginatedProducts3}/>
      
    </div></>
  )
}

export default Rifles