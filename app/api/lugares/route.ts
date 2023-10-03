import { IncomingMessage } from "http";
import { NextResponse } from "next/server";
import raw from "raw-body";

export async function GET(request: Request) {
  return NextResponse.json([
    {
      nombre: "Mendoza",
      descripcion: "Uspallata, Mendoza, Argentina.",
      urlImagen:
        "https://images.pexels.com/photos/2954929/pexels-photo-2954929.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Bariloche",
      descripcion: "San Carlos de Bariloche, Río Negro, Argentina.",
      urlImagen:
        "https://images.pexels.com/photos/13593011/pexels-photo-13593011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      nombre: "Santa Cruz",
      descripcion: "El Chaltén, Santa Cruz Province, Argentina.",
      urlImagen:
        "https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      nombre: "Buenos Aires",
      descripcion: "Capital, Buenos Aires, Argentina.",
      urlImagen:
        "https://media.istockphoto.com/id/973274388/es/foto/vista-a%C3%A9rea-de-la-ciudad-de-buenos-aires-con-obelisco-y-avenida-9-de-julio-en-la-noche-buenos.jpg?b=1&s=612x612&w=0&k=20&c=34ohmYbxM2_XZvsgzHUHTIkICsdqfeYnYSXBHP4vfX4=",
    },

    {
      nombre: "New York",
      descripcion: "New York, Usa.",
      urlImagen:
        "https://images.pexels.com/photos/3440444/pexels-photo-3440444.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Las Vegas",
      descripcion: "Las Vegas, Nevada , Usa.",
      urlImagen:
        "https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Los Angeles",
      descripcion: "Los Angeles, California, Usa.",
      urlImagen:
        "https://images.pexels.com/photos/3166785/pexels-photo-3166785.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Disney",
      descripcion: "Disney Word, Orlando , Usa.",
      urlImagen:
        "https://images.pexels.com/photos/3428289/pexels-photo-3428289.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Punta Cana",
      descripcion: "Caribe, Republica Dominicana.",
      urlImagen:
        "https://media.istockphoto.com/id/1201027526/es/foto/vista-a%C3%A9rea-de-una-hermosa-playa-caribe%C3%B1a-en-punta-cana-rep%C3%BAblica-dominicana.jpg?b=1&s=612x612&w=0&k=20&c=Rel0zP2qWkKNdnLUkMp4FqcAi1titUPBcpGJXhsSIng=",
    },

    {
      nombre: "Can Cun",
      descripcion: "Can Cun, Mexico.",
      urlImagen:
        "https://images.pexels.com/photos/15421138/pexels-photo-15421138/free-photo-of-mar-playa-vacaciones-arena.png?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Jamaica",
      descripcion: "Caribe, Jamica.",
      urlImagen:
        "https://images.pexels.com/photos/16741473/pexels-photo-16741473/free-photo-of-mar-playa-arena-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      nombre: "Miami",
      descripcion: "Miami, Florida, Usa.",
      urlImagen:
        "https://images.pexels.com/photos/6937301/pexels-photo-6937301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);
}

// POST

// npm install raw-body
