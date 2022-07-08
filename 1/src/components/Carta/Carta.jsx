import {useState,useEffect} from 'react'

const Carta = ({ paciente, setPaciente, eliminarPaciente }) => {
    const {nombre, owner, email, fecha, sintomas, id} = paciente


    const handleEliminar = () => {

        const respuesta = confirm("Desea Eliminar");

        respuesta ? eliminarPaciente(id): "";

    }

  return (
    <div className='w-full border-solid rounded-lg border-2 bg-gray-50 mt-5 p-5'>

        <h2 className='text-3xl'> {paciente.key} </h2>
        <div className="text-left flex">
    
            <div className='w-1/3 uppercase'><h3 className='text-l font-bold'> Pet's Name :</h3></div>
            <div className='w-1/2'><h3 className='text-l'>{nombre}</h3></div>
        </div>
        <div className="text-justify flex">
            <div className='w-1/3 uppercase'><h3 className='text-l font-bold'> Owner :</h3></div>
            <div className='w-1/2 '><h3 className='text-l'>{owner}</h3></div>
        </div>
        <div className="text-justify flex">
            <div className='w-1/3 uppercase'><h3 className='text-l font-bold'> Email :</h3></div>
            <div className='w-1/2'><h3 className='text-l'>{email}</h3></div>

        </div>
        <div className="text-justify flex">
        <div className='w-1/3 uppercase'><h3 className='text-l font-bold'> Date :</h3></div>
            <div className='w-1/2 '><h3 className='text-l'>{fecha}</h3></div>
        </div>
            <div className='w-full text-left uppercase'><h3 className='text-l font-bold'> Symptom :</h3></div>
            <div className='w-full text-justify'><h3 className='text-l'>{sintomas}</h3></div>

    <div className="flex justify-between">

    <button className='bg-indigo-400 px-20 rounded-xl py-2 text-white font-bold uppercase text-xs'
        onClick={ ()=>{  return (setPaciente(paciente))}}
    
    >Editar</button>
    <button onClick = {()=>{
        
        return (handleEliminar())}} className='bg-red-400 px-20 rounded-xl py-2 text-white font-bold uppercase text-xs'
        
    >Borrar</button>

    </div>



    </div>
  )
}

export default Carta