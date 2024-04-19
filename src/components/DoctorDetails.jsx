import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext ,useState} from 'react';
import { AppContext } from '../Context/AppContext';
import doctoruiService from '../service/doctoruiService';
import { useEffect } from 'react';
const DoctorDetails = () => {
    const { id } = useParams();
    const [status,setStatus] = useState();
    const [showStatus,setShowStatus]=useState();
    const {doctorData}=useContext(AppContext)
    const doctor = doctorData.find((doctor)=> doctor._id===id)
    const [dateTime, setDateTime] = useState('');
const [Name,SetName] = useState("")

    const handleDateTimeChange = (e) => {
      setDateTime(e.target.value);
    };



    function handleNameChange(e){
        SetName((prev)=>{
            return e.target.value
        })

    }

async function handleSubmit(e){
    e.preventDefault();
    try{
        const response = await doctoruiService.bookAppoinment(dateTime,id,Name)
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
    }
    catch(err){
        console.log(err)
    }
SetName("")
setDateTime("")

}

  return (
 <>
 <h1>Doctor Details</h1>
<ul className="list-group">
<li className="list-group-item"> doctor name : {doctor.name}</li>
        <li className="list-group-item"> doctor location : {doctor.location}</li>
        <li className="list-group-item"> doctor availability : {doctor.availability ? "available" : "not available"}</li>
        <li className="list-group-item"> doctor contact : {doctor.contact}</li>
        <li className="list-group-item"> doctor Timing : {doctor.Timing}</li>

        <li className="list-group-item">doctor Appoinments : {doctor.Appoinments.length}</li>
</ul>

<h1>Fill Form</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-3">
        <label htmlFor="Name" className="form-label">Your Name:</label>
      <input
        type="text" className="form-control"
        id="Name"
        name="Name"
        value={Name}
        onChange={(e) =>  handleNameChange(e)}
        required
      />
      </div>
      <div className="mb-3">
        <label htmlFor="datetime" className="form-label">Select date and time:</label>
  <input className="form-control" type="datetime-local" id="datetime" name="datetime" value={dateTime} 
        onChange={handleDateTimeChange}/>
        </div>
  <input type='submit' className="btn btn-primary" value="Submit"/>
  
        </form>
        {status ? showStatus : ""}

 </>
  )
}

export default DoctorDetails