import React from 'react'
import { useNavigate } from 'react-router-dom';
const Doctor = (props) => {
  const navigate = useNavigate();
    

function handlebookClick(){
  navigate(`/booking/${props.doctor._id}`)
}



  return (
    <>
         <tr>
      <th scope="row">{props.id+1}</th>
      <td>{props.doctor.name}</td>
      <td>{props.doctor.location}</td>
      <td>{props.doctor.availability ? "available" : "not available"}</td>
      <td>{props.doctor.contact}</td>
      <td>{props.doctor.Timing}</td>
      <td>{props.doctor.availability ? <button className="btn btn-success" onClick={handlebookClick}>Book Appoinment</button> : <button disabled  className="btn btn-danger">Appoinment Full</button>}</td>
    
    </tr>
   
    </>
  )
}

export default Doctor