import React, { useContext } from 'react';
import { contextz } from './context';
import { useState } from 'react';

export const Pagination = () => {
  const bb = useContext(contextz);
  const { setCurrentPage } = bb;
  const [paginationend, setpaginationend] = useState(true);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

  };
const pagend=()=>{
  setpaginationend(false)
  setTimeout(() => {
    setpaginationend(true)
  }, 2000);

}
  return (<> {paginationend===true?(<div style={{ paddingLeft: "45%" }}>
    <div className='pb-3 d-flex'><div style={{"padding-right":"10px"}}><button className='btn btn-dark trans' onClick={() => handlePageChange(1)}>1</button></div><div style={{"padding-right":"10px"}}> <button className='btn btn-dark trans' onClick={() => handlePageChange(2)}>2</button></div><div style={{"padding-right":"10px"}}><button className='btn btn-dark trans' onClick={() => pagend()}>3</button></div>
      
     
      
    </div>
  </div>):(<div className='text-center text-warning'><h2>No more products yet</h2></div>) };
  </>
  );
};
