import React from 'react'

const Mappedreview = (props) => {
  return (<>
          <div className="reviewer-info">
            <h4>{props.mapped.name}</h4>
              </div>
           <p className="review-text">{props.mapped.review}</p></>
 ) 
}

export default Mappedreview