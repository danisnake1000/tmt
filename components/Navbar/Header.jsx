import React from 'react'
import './Header.scss'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='header'>
        
<Navbar/>

        <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href={"/"} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>  
<img style={{width:"100px"}} src="/Logo/logotipo.gif" alt="" />
<p style={{color:"black", fontWeight:"600"}}>Operadora Mayorista de Turismo</p>
<p style={{color:"black", fontWeight: "400", fontSize:"11px"}}>EVyT Leg. 14556 / Dip. 630</p>

</a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">
            hotel</span>
            <p>Hoteles</p>
 </a>
        </li>


        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">card_travel</span>
            <p>Paquetes</p>
 </a>
        </li>

        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">flight_takeoff</span>
            <p>Vuelos</p>
 </a>
        </li>

        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">paid</span>
            <p>Ofertas</p>
 </a>
        </li>

        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">diversity_3</span>
            <p>Grupales</p>
 </a>
        </li>

        <li>
          <a href="#" class="flex flex-col align-middle items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">       
          <span style={{fontSize:"30px"}} class="material-symbols-outlined">signpost</span>
            <p>Circuitos</p>
 </a>
        </li>


      
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header