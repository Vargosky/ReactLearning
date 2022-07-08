import React from 'react'
import { useState, useEffect } from 'react'
import Error from '../Error/Error';



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {





    //hooks
    const[nombre,setNombre] = useState('');
    const[owner,setOwner] = useState('');
    const[email,setEmail] = useState('');
    const[fecha,setFecha] = useState('');
    const[sintomas,setSintomas] = useState('');
    const[error,setError] = useState(false);

    

    
    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setNombre(paciente.nombre)
            setOwner(paciente.owner)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


      //genera un id único. es como un hash
    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now.toString(36);

        return(random + fecha);


    }

//validaciones

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if ([nombre, owner, email, fecha, sintomas].includes('')) {
            setError(true)
        }else{
            //objeto
            const objetoPaciente = {
                nombre, 
                owner, 
                email, 
                fecha, 
                sintomas,
                
            }
     
        setError(false);

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados);
            setPaciente({});
          //limpieza del formulario
        setNombre(""); 
        setOwner("");
        setEmail(""); 
        setFecha(""); 
        setSintomas("");

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }   


        //limpieza del formulario
        setNombre(""); 
        setOwner("");
        setEmail(""); 
        setFecha(""); 
        setSintomas("");

        
        }
      
       
    }



  return (
<div className='md:w-70 lg:w-2/5 lg:ml-10 mb-5 md:ml-5'>
    
    <h2 className='text-3xl text-center font-bold'>Seguimiento de Pacientes</h2>
    <p>Añade Paciente y <span className='text-indigo-500 font-bold'>adminístralos</span> </p>

    <div className='border-solid border-2 rounded-xl mt-5 bg-gray-100 shadow-xl'>
    <form
    onSubmit={handleSubmit}
    >
    <div className='pt-5 pb-5 text-left pl-10 pr-10 uppercase text-sm md:m-3'>

        { error && <Error mensaje = "Todos los campos requeridos"/>}


        <label className='font-bold' htmlFor='name'>Pet's Name : {''} <span className='text-indigo-500'>{nombre}</span> </label>
        <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 mb-2'
            name='name'
            id='name'
            type="text"
            placeholder='Ingrese el nombre'
            value={nombre}
            onChange= { (e)=>{setNombre(e.target.value)} }
        />


        <label className='font-bold' htmlFor='owner'>Owner : <span className='text-indigo-500'>{ owner }</span></label>
        <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 mb-2' 
            name='owner'
            id='owner'
            type="text"
            placeholder='Ingrese el nombre'
            value={owner}
            onChange= { e=>{setOwner(e.target.value)} }
        />


        <label className='font-bold' htmlFor='email'>Email <span className='text-indigo-500'>{ email }</span> </label>
        <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 mb-2'
            name='email'
            id='email'
            type="email"
            placeholder='Ingrese el nombre'
            value={email}
            onChange= { e=>{setEmail(e.target.value)} }
        />

        <label className='font-bold' htmlFor='alta'>Alta <span className='text-indigo-500'>{ fecha }</span></label>
        <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 mb-2'
            name='alta'
            id='alta'
            type='date'
            placeholder='Ingrese el nombre'
            value= {fecha}
            onChange= { e=>{setFecha(e.target.value)} }
        />  

        <label className='font-bold' htmlFor='symptom'>symptom</label>
        <textarea
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 mb-2'
            name='symptom'
            id='symptom'
            type='text'
            placeholder='Ingrese el nombre'
            value={sintomas}
            onChange= { e=>{setSintomas(e.target.value)} }
        /> 

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />

    </div>    
    </form>
    </div>



</div>
  )
}

export default Formulario