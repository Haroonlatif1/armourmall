import React, { useContext } from 'react'
import CardsMap from './cardsmap2'
import Parallelogram from '../paralellogram4'
import { contextz } from '../context'

const Rifles = () => {
 const bb=useContext(contextz)
 const {PaginatedProducts4}=bb
  return (<>
  <Parallelogram/>
    <div  className="container mt-4 pb-2" >
      <CardsMap p={PaginatedProducts4}/>
      
    </div></>
  )
}

export default Rifles