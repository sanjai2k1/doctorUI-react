import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import AddDoctor from './components/AddDoctor';
import DoctorList from './components/DoctorList';
import Admin from './components/Admin';
import { createContext,useState } from 'react';
import { AppProvider } from './Context/AppContext';
import DoctorDetails from './components/DoctorDetails';
function App() {
 


  return (
    <AppProvider>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<DoctorList/>}/>
      <Route path="/addDoctor"  element={<AddDoctor/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/booking/:id" element={<DoctorDetails/>} />
      
    </Routes>
    </BrowserRouter>
  </AppProvider>
  );
}

export default App;

