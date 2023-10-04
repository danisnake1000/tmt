'use client'
import React, { useState } from 'react';
import './arrepentimiento.scss';
import {Input} from "@nextui-org/react";

const Page = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nroCompra, setNroCompra] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://www.tmtoperadora.tur.ar/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          nroCompra,
          email,
          telefono,
          fechaCompra,
          mensaje,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        console.log('Email enviado con éxito');
      } else {
        setIsSuccess(false);
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      setIsSuccess(false);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='arrepentimiento'>

<h2 style={{color:"black", fontWeight:"bold", fontSize:"26px", marginBottom:"10px"}}>Formulario de Arrepentimiento</h2>
      <p style={{marginBottom:"20px"}}>Ley 24.240
Autoridad Nacional de aplicación.
Defensa de las y los Consumidores. Para reclamos ingrese <a style={{color:"blue"}} href="https://autogestion.produccion.gob.ar/consumidores" target='_blank' >aquí</a> </p>
      


{isLoading && <div>Cargando...</div>}
      {isSuccess && <div>Email enviado con éxito</div>}
      {!isLoading && !isSuccess && (



      <form onSubmit={sendMail}>


      <div className="filaUno">

        <div className="nroCompra" >

        <label htmlFor="nroCompra">Número de Compra:</label>
        <input
          type="text"
          id="nroCompra"
          value={nroCompra}
          placeholder='Ingrese su número de compra'
          onChange={(e) => setNroCompra(e.target.value)}
          required
        />
        </div>

        <div className="fechaCompra">
        <label htmlFor="fechaCompra">Fecha de Compra:</label>
        <input
          type="date"
          id="fechaCompra"
          value={fechaCompra}
          placeholder='Fecha de compra'
          onChange={(e) => setFechaCompra(e.target.value)}
          required
        />

        </div>

      </div>

      <div className="filaDos">


        <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            placeholder= "Por favor, comparta su mensaje con nosotros, y le responderemos a la brevedad."
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

      </div>

      <div className="filaTres">

      <h2>Completa los datos del cliente</h2>

        <div className="datos">


            <div className="nombre">

              <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder='Ingrese su nombre'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />

              </div>

              <div className="apellido">

              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                placeholder='Ingrese su apellido'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />

              </div>


              <div className="email">

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder='Ingrese su email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>



              <div className="telefono">

                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder='Ingrese su teléfono'
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />

              </div>

        </div>

      

      </div>

       

        
       
      <button type='submit' className=" botonLink" style={{ margin:"50px", marginBottom:"-0px",padding:"20px 20px 20px 20px",borderRadius:"20px"}}> Enviar formulario de arrepentimiento</button>
        
      </form>

)}
    </div>
  );
};

export default Page;
