'use client'

import React, { useState } from 'react';
import './arrepentimiento.scss';
import DatePicker from 'flowbite-datepicker';



const Page = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        console.log('Email Sent Successfully');
      } else {
        console.error('Failed to Send Email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='arrepentimiento'>

        <div className="contenido">

          <h1>Formulario de arrepentimiento</h1>

          <div className="filaUno" style={{display:"flex", margin:"20px"}}>

            <div className="nroCompra" style={{width:"50%"}}>
              <p>INGRESE EL NUMERO DE COMPRA</p>
              <input type="text" placeholder='' style={{width:"80%"}} />
            </div>

            <div className="fechaCompra" style={{width:"50%"}}>
              <p>FECHA EN QUE SE REALIZO LA COMPRA</p>
              <input type='date' style={{width:"40%"}} ></input>
            </div>
            
          </div>

          <div className="filaDos"></div>

          <div className="filaTres"></div>
          
          <div className="Boton"></div>

        </div>
     
        {/* <form onSubmit={sendMail} className="formulario">

          <div className="">
            <h1 className="text-xl font-semibold">Tutorial Email</h1>
          </div>


          <div className="">

            
            <label htmlFor="email" className="text-sm font-light text-gray-500">
              Your Email
            </label>



            <input
              name="email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
              className="rounded-xl border-2 border-gray-400 p-2"
            />
          </div>
          <div className="relative flex flex-col space-y-1">
            <label htmlFor="title" className="text-sm font-light text-gray-500">
              Subject
            </label>
            <input
              name="title"
              type="text"
              id="title"
              required
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="What will you title this goal?"
              className="rounded-xl border-2 border-gray-400 p-2"
            />
          </div>
          <div className="relative flex flex-col space-y-1">
            <label htmlFor="description" className="text-sm font-light text-gray-500">
              What would you need help with?
            </label>
            <textarea
              name="description"
              id="description"
              required
              cols={10}
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="What will you title this goal?"
              className="rounded-xl border-2 border-gray-400 p-2"
            />
          </div>

          <button type='submit'>

            <span>Send Message</span>
          </button>
        </form> */}

    </div>
  );
};

export default Page;
