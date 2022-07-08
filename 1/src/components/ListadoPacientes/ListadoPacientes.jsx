import React from 'react'
import { Card } from 'react-bootstrap'
import Carta from '../Carta/Carta'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
  return (
    <div className='md: w-full lg:w-1/2 mb-5 ml-5'>
    <div className="text-center">
            <h1 className='text-3xl font-bold' >Listado <span>Pacientes </span>{''}</h1>
            <p> Administra tus <span className='text-indigo-600 font-bold'>Pacientes</span> y visitasssssss</p>
    
    </div>

    <div className="h-[70vh] lg:overflow-y-scroll w-full">
    {
      pacientes.map( (paciente) => {

            return(

                <Carta
                    key = {paciente.id}
                    paciente = {paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente = {eliminarPaciente}
                />


            )

    }  )
    
    }
</div>






    </div>
  )
}

export default ListadoPacientes