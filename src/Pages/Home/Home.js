import React, { Component } from 'react'
import { useState, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './Home.css';
import { FaTrash } from 'react-icons/fa';
import Header from '../../Component/Header/Header';

function Home({ user }) {
  const taskRef = useRef();
  const stateRef = useRef();
  const dateRef = useRef();
  console.log('console de user ' + user)
  /*  useEffect(() => {
     async function encontrar() {
       //estamos trayendo la base de datos de usuarios
       const response = await fetch("http://localhost:5000");
       //le decimos que la response sera un metodo json  
       const data = response.json()
       console.log(data)
     };
     encontrar().catch(console.log);
   }, []) */

  const onSubmit = (e) => {
    e.preventDefault();
    const task = taskRef.current.value;
    const state = stateRef.current.value;
    const date = dateRef.current.value;
    //console.log({ email, password })
    fetch("http://localhost:5000/home", {
      method: "POST",
      headers: { "content-type": "application/json" },
      //solicitamos email y password del ref
      body: JSON.stringify({ task, state, date, uid: user._id })
    })//".then" the an promize is the same that line 14
      //.then(response => response.json())
      .then(function (response) {
        //decodificar formato json
        return response.json()
      }).then(function (data) {
        console.log("Data: ", data)
        console.log(user)
      })
  }

  return (
    <>
      <Header/>
      
      <div className='Body-Home'>

        <div class="background-H">
          <div class="shape-H"></div>
          <div class="shape-H"></div>
        </div>

        <form className="Form-Tareas" onSubmit={onSubmit}>

          <h3 className='Titulo'>Tareas</h3>
          <div className='contendeore'>

            <label className="Label-home" for="task">Titulo</label>
            <input className="Input-home" id="task" type="text" name="task" ref={taskRef} />

            <label className='Label-home' for="state">Tarea</label>
            <input className="Input-home" id="state" type="text" name="state" ref={stateRef} />

            <label className='Label-home' for="date">Fecha</label>
            <input className="Input-home" id="date" type="date" name="date" ref={dateRef} />
            <button className="Boton-home">Guardar Tareas</button>
            
          </div>
        </form>

        <div className="IdTarea-home" id="IdTarea"></div>

        <div className='deshboard'>
          <ul className='ul'>

            {user.tasks.map((e) => {
              console.log('este es el estado' + e)
              return (

                <li className='Lista' key={e._id}>

                  <h2 className='Nota'>{e.task}</h2>
                  <h2 className='Nota'>{e.state}</h2>
                  <h2 className='Fecha'>{e.date} <button className='basura'> <FaTrash size='1.3em' /> </button></h2>
                  

                </li>
              )
            })}
          </ul>
        </div>
      </div>

    </>

  )
}

export default Home;