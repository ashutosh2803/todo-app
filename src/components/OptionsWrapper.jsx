import React from 'react'
import { Button } from 'react-bootstrap';

const OptionsWrapper = ({handleOptions}) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <Button className='btn btn-danger mx-3' onClick={() => handleOptions(1)}>Pending</Button>     
        <Button className='btn btn-warning mx-3' onClick={() => handleOptions(2)}>Completed</Button>
        <Button className='btn btn-primary mx-3' onClick={() => handleOptions(3)}>Show All</Button>  
    </div>
  )
}

export default OptionsWrapper;