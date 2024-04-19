import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import doctoruiService from '../service/doctoruiService';
const AdminDoctors = (props) => {
  const [status,setStatus] = useState();
  const [showStatus,setShowStatus]=useState();
async function handleClick(e){
  console.log(e.target.value)

  try{
    const response = await doctoruiService.updateStatus(e.target.value,props.doctor._id)
    if (response.status===200){
      setStatus(true);
      setShowStatus("done..")
      setTimeout(() => {
          setStatus(false)
      }, 3000);
     }
     else{
      setStatus(true);
      setShowStatus("error..")
      setTimeout(() => {
          setStatus(false)
      }, 3000);
     }

  }catch(err){
    console.log(err)
  }



}



  return (
    <>
       
        <li className="list-group-item"> doctor name : {props.doctor.name}</li>
        <li className="list-group-item"> doctor location : {props.doctor.location}</li>
        <li className="list-group-item"> doctor availability : {props.doctor.availability ? "available" : "not available"}</li>
        <li className="list-group-item"> doctor contact : {props.doctor.contact}</li>
        <li className="list-group-item"> doctor Timing : {props.doctor.Timing}</li>
        <li className="list-group-item">doctor Appoinments : {props.doctor.Appoinments.length}</li>
        <li className="list-group-item"><ul className="list-group">
            {props.doctor.Appoinments.map((appointment,index)=><li className="list-group-item" key={index}>{appointment}</li>)}
        </ul></li>
        <li>Doctor Availability<button value="enable" className="btn btn-success" onClick={(e)=>handleClick(e)}>Enable</button> <button value="disable" className="btn btn-danger" onClick={(e)=>handleClick(e)}>Disable</button></li>
        {status ? showStatus : ""}

    </>
  )
}

export default AdminDoctors