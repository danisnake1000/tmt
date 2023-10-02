import React from 'react'
import './Navbar.scss'
import Link from 'next/link'
import Image from 'next/image';
import {Button, ButtonGroup} from "@nextui-org/button";




const Navbar = () => {
  return (
    <div className='navbar'>


    <div className="navbarTop">

          <div className="telefono" style={{display:"flex"}}>
        <span class="material-symbols-outlined">call</span>
        <p className='ml-2'>+54 9 261 6347453</p>
      </div>  

        <h1 style={{margin:"0px 20px 0px 20px"}}>-</h1>

      <div className="email" style={{display:"flex"}}>
        <span class="material-symbols-outlined">mail</span>
        <p className='ml-2' >alejandro@tmtoperadora.com.ar</p>
      </div>


    </div>


    <div className="navbarDown">

    <div className="left">

<Link href={"/"}>  
<img src="/Logo/logotipo.gif" alt="" />
</Link>
  {/* <div className="text">
    <h4 style={{color:"black"}}>Operadora Mayorista de Turismo</h4>
    <h6 style={{color:"black",fontSize:"12px"}}>EVyT Leg. 14556 / Dip. 630</h6>
  </div> */}
</div>


<div className="rigth">


<div className="down">

<Link href={"/"}>
    <div className='botonNavbar'>
      <span style={{fontSize:"30px"}} class="material-symbols-outlined">hotel</span>
      <p>Hoteles</p>
    </div>
  </Link>
 
  <Link href={"/"}>
    <div className='botonNavbar'>
      <span style={{fontSize:"30px"}} class="material-symbols-outlined">card_travel</span>
      <p>Paquetes</p>
    </div>
  </Link>

  <Link href={"/"}>
  <div className='botonNavbar'>
      <span style={{fontSize:"30px"}} class="material-symbols-outlined">flight_takeoff</span>
      <p>Vuelos</p>
    </div>
  </Link>

  <Link href={"/"}>
  <div className='botonNavbar'>
      <span style={{fontSize:"30px"}} class="material-symbols-outlined">paid</span>
      <p>Ofertas</p>
    </div>
  </Link>


  <Link href={"/"}>
  <div className='botonNavbar'>
  <span style={{fontSize:"30px"}} class="material-symbols-outlined">diversity_3</span>
      <p>Grupales</p>
    </div>
  </Link>

  <Link href={"/"}>
  <div className='botonNavbar'>
      <span style={{fontSize:"30px"}} class="material-symbols-outlined">signpost</span>
      <p>Circuitos</p>
    </div>
  </Link>


</div>
 
</div>


    </div>
       

    </div>
  )
}

export default Navbar