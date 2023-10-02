'use client'
import NextLink from "next/link";
import './page.scss'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import CardUi from '../components/Card/CardUi'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useEffect, useState } from "react";
import {Spinner} from "@nextui-org/react";
import Carrusel from "@/components/Carousel/Carrusel";




export default function Home() {

	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


	useEffect(() => {
		// Realizar la solicitud a la API y almacenar los datos en el estado
		fetch('https://tmt-web-page-a50rbboul-astu2222.vercel.app/api/lugares')
		  .then((response) => response.json())
		  .then((apiData) => {
			setData(apiData); // Almacenar los datos en el estado
      setLoading(false); // Cambiar el estado de carga a false cuando los datos se han cargado

		  })
		  .catch((error) => {
			console.error('Error al obtener datos de la API', error);
      setLoading(false); // Cambiar el estado de carga a false en caso de error

		  });
	  }, []);


return (
	<div className="home">

    <Carrusel/>

    { loading ? (<>
    
      <Spinner className="m-40"/>
    
    </>) : (<>
    
      <h1 className="fs-40 text-black text-2xl m-10	">Embárcate a la aventura y explora estos lugares únicos:</h1>
			<div className="lugares">
				{data.map((item, index) => (
				<CardUi key={index} data={item} />
				))}
			</div>
    
    </>)}





			<div className="w-full max-w-screen-xl mx-auto gap-2 grid grid-cols-12 grid-rows-2 px-8 mb-20">
			<Card className="col-span-12 sm:col-span-4 h-[300px] relative hover:scale-115 z-10">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src= "https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] hover:scale-115 z-10">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover bg-db"
        src="https://images.pexels.com/photos/14117921/pexels-photo-14117921.jpeg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-white font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://images.pexels.com/photos/13891178/pexels-photo-13891178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/13609247/pexels-photo-13609247.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>


</div>

	


		

);}