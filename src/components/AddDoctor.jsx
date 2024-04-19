import React, { useState } from 'react'
import doctoruiService from '../service/doctoruiService';
const AddDoctor = () => {

const [doctorData,setDoctorData] = useState({
    doctorName:"",
    doctorLocation:"Chennai",
    doctorContact:"",
    doctorTiming:"Morning",


})

const [status,setStatus] = useState();
const [showStatus,setShowStatus]=useState();
function handleChange(e){
const {name,value}=e.target;




setDoctorData((prev)=>{
   
    return{
        ...prev,
        [name]:value
    }
})
}




async function handleSubmit  (e){

e.preventDefault();



try{
   const response = await doctoruiService.post(doctorData)
   if (response.status===200){
    setStatus(true);
    setShowStatus("successfully added..")
    setTimeout(() => {
        setStatus(false)
    }, 3000);
   }
   else{
    setStatus(true);
    setShowStatus("not addedd..")
    setTimeout(() => {
        setStatus(false)
    }, 3000);
   }
}
catch(err){
    console.log(err)
}


    setDoctorData({
        doctorName:"",
        doctorLocation:"Chennai",
        doctorContact:"",
        doctorTiming:"Morning",
    
    
    })
}


  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div>
      <label htmlFor="doctorName">Doctor Name:</label>
      <input
        type="text"
        id="doctorName"
        name="doctorName"
        value={doctorData.doctorName}
        onChange={(e) =>  handleChange(e)}
        required
      />
    </div>
    <div>
       <label htmlFor="doctorLocation">Doctor Location:</label>
      <select
        id="doctorLocation"
        name="doctorLocation"
        value={doctorData.doctorLocation}
        onChange={(e) =>  handleChange(e)}
        required
      >
       
        <option value="Chennai">Chennai</option>
        <option value="Tiruvallur">Tiruvallur</option>
        <option value="Kanchipuram">Kanchipuram</option>
      </select>
    </div>
    <div>
      <label htmlFor="doctorContact">Doctor Contact:</label>
      <input
        type="number"
        id="doctorContact"
        name="doctorContact"
        value={doctorData.doctorContact}
        onChange={(e) =>  handleChange(e)}
        required
      />
    </div>
    <div>
      <label htmlFor="doctorTiming">Doctor Timing:</label>
      <select
        id="doctorTiming"
        name="doctorTiming"
        value={doctorData.doctorTiming}
        onChange={(e) =>  handleChange(e)}
        required
      >
       
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>

  {status ? showStatus : ""}
  </>
  )
}

export default AddDoctor