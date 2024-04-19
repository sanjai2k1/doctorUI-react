import React, { useContext, useEffect, useState } from 'react'
import doctoruiService from '../service/doctoruiService'
import Doctor from './Doctor';

import { AppContext } from '../Context/AppContext';
const DoctorList = () => {

const {loading, setLoading, errorocuured,setErrorOcurred,doctorData,setDoctorData,showData,setShowData,searchForm,setSearchForm ,handleSubmit,handleChange}=useContext(AppContext)











  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <fieldset >
    <legend>Search Box</legend>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location:</label>
        <select className="form-select" aria-label="Default select example"
          id="location"
          name="location"
          value={searchForm.location}
          onChange={(e)=>handleChange(e)}
          required
        >
        <option value="All">All</option>
          <option value="Chennai">Chennai</option>
        <option value="Tiruvallur">Tiruvallur</option>
        <option value="Kanchipuram">Kanchipuram</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="timing" className="form-label">Timing:</label>
        <select className="form-select" aria-label="Default select example"
          id="timing"
          name="timing"
          value={searchForm.timing}
          onChange={(e)=>handleChange(e)}
          required
        >
        <option value="All">All</option>
         <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
      </fieldset>
    </form>
    <div>
    
    
   <h1> DoctorList </h1>

{loading ? loading&&errorocuured ? <h1>error happened refresh....</h1> :  showData.length===0 ? <h4>Add Doctor to display</h4> :<table className="table"><thead>
    <tr>
      <th scope="col">No </th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Availability</th>
      <th scope="col">Contact</th>
      <th scope="col">Timing</th>
      <th scope="col">Book</th>
    </tr>
  </thead><tbody>
  {showData.map((doctor,index)=><Doctor doctor={doctor} key = {index} id={index}/>)}
  </tbody></table>    :<h1>Loading data...</h1>}


</div>




    </>
  )
}

export default DoctorList