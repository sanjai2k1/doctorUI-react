import { createContext,useState,useEffect } from 'react';
import doctoruiService from '../service/doctoruiService';
const AppContext = createContext();

const AppProvider = ({ children }) => {
const [loading,setLoading] = useState(false);
const [errorocuured,setErrorOcurred] = useState(false);
const [doctorData,setDoctorData]=useState([]);
const [showData,setShowData]=useState([])
const [searchForm,setSearchForm] = useState({
  location:"All",
  timing:"All"
})
useEffect(()=>{

    async function getData (){
   try{
      const response =  await doctoruiService.get();
   
      if (response.status===200){
       setLoading(true)
       setErrorOcurred(false)
       setDoctorData(response.data)
       setShowData((prev)=>{
         return [...doctorData]
       })
   
      }else{
       setLoading(true)
       setErrorOcurred(true)
      }
   
   }
   catch(err){
       console.log(err)
       setLoading(true)
       setErrorOcurred(true)
   }
   
   
   }
   
   getData()
   
   
   
   },[loading])


   function handleSubmit(e){
    e.preventDefault();
    
    
    
    if (searchForm.location==="All" && searchForm.timing==="All"){
      setShowData((prev)=>{
    
        return[...doctorData]
      }) 
    
    
    
    }
    else if(searchForm.location==="All" && searchForm.timing!=="All"){
    
      setShowData((prev)=>{
    
        return[...doctorData.filter((doctor,index)=>
          {
            if (doctor.Timing===searchForm.timing){
              return doctor
            }
          })]
      }) 
    
    
    
    
    }
    else if(searchForm.location!=="All" && searchForm.timing==="All"){
      setShowData((prev)=>{
    
        return[...doctorData.filter((doctor,index)=>
          {
            if (doctor.location===searchForm.location){
              return doctor
            }
          })]
      }) 
    
    
    }
    else{
    
    
    
    setShowData((prev)=>{
    
      return[...doctorData.filter((doctor,index)=>
        {
          if (doctor.location===searchForm.location && doctor.Timing===searchForm.timing){
            return doctor
          }
        })]
    }) 
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    
    
    function handleChange(e){
    const {name,value}=e.target;
    setSearchForm((prev)=>{
    
      return {
        ...prev,
        [name]:value
      }
    })
    }
    
    

return (
    <AppContext.Provider
    value={{ loading, setLoading, errorocuured,setErrorOcurred,doctorData,setDoctorData,showData,setShowData,searchForm,setSearchForm,handleSubmit,handleChange }}
  >
      {children}
    </AppContext.Provider>
  );
}
export { AppContext, AppProvider };