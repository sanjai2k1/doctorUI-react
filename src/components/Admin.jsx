import React from 'react'
import  { useEffect, useState } from 'react'
import doctoruiService from '../service/doctoruiService';
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';
import Doctor from './Doctor';
import AdminDoctors from './AdminDoctors';
const Admin = () => {
    const {loading, setLoading, errorocuured,setErrorOcurred,doctorData,setDoctorData,showData,setShowData,searchForm,setSearchForm ,handleSubmit,handleChange}=useContext(AppContext)



  return (
    <>


<h1>Admin Page</h1>
<form onSubmit={(e)=>handleSubmit(e)}>
<fieldset >
    <legend>Search Box</legend>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location:</label>
        <select className="form-select"
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
        <select className="form-select"
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
    <div>DoctorList</div>

{loading ? loading&&errorocuured ? <h1>error happened refresh....</h1> :  showData.length===0 ? <h4>Add Doctor to display</h4> : showData.map((doctor,index)=><ul key={index} className="list-group mb-5 "><AdminDoctors doctor={doctor} key = {index} id={index}/></ul> )  :<h1>Loading data...</h1>}



    </>
  )
}

export default Admin