import axios from "axios"


const doctor_Api_Url = "https://nodejs-rest-gl3w.onrender.com/"



class DoctorService{
    get(){
        return axios.get(`${doctor_Api_Url}`)
    }



    post(doctorData){
        return axios.post(`${doctor_Api_Url}post`,doctorData)
    }



    bookAppoinment(data,id,name){
        return axios.post(`${doctor_Api_Url}book/${id}`,{dateTime:data,name:name})
    }



    updateStatus(status,id){

        return axios.post(`${doctor_Api_Url}status/${id}`,{status:status})

    }








}



export default new DoctorService();