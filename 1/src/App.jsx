import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListadoPacientes from './components/ListadoPacientes/ListadoPacientes'





function App() {
  
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(() => {
    setPacientes(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  }, []);

  useEffect(()=>{
    if(pacientes.length > 0) {
      localStorage.setItem('pacientes',JSON.stringify(pacientes));
    }   
  },[pacientes])




  function eliminarPaciente(id) {

    const pacientesActualizados = pacientes.filter(paciente => { return (paciente.id !== id) })
    setPacientes(pacientesActualizados)

  }


  return (
    <div className="App">

     <Header/> 

    <div className= 'md:w-full mt-12 flex text-center flex-wrap container overscroll-y-none h-[80vh]'>

      
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}

        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />

      
        

    </div>
    </div>
  )
}

export default App
