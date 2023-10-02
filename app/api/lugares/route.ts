import { IncomingMessage } from 'http';
import { NextResponse  } from 'next/server';
import raw from 'raw-body';



export async function GET(request:Request) {
    return NextResponse.json([
      
      {

      nombre: "Mendoza",
      descripcion:"Uspallata, Mendoza, Argentina.",
      urlImagen:"https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
      },

      {

        nombre: "Bariloche",
        descripcion:"San Carlos de Bariloche, Río Negro, Argentina.",
        urlImagen:"https://images.pexels.com/photos/13593011/pexels-photo-13593011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
      },

      {

        nombre: "Santa Cruz",
        descripcion:"El Chaltén, Santa Cruz Province, Argentina.",
        urlImagen:"https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
      },

      {

        nombre: "Mendoza",
        descripcion:"Uspallata, Mendoza, Argentina.",
        urlImagen:"https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        },
  
        {
  
          nombre: "Bariloche",
          descripcion:"San Carlos de Bariloche, Río Negro, Argentina.",
          urlImagen:"https://images.pexels.com/photos/13593011/pexels-photo-13593011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        },
  
        {
  
          nombre: "Santa Cruz",
          descripcion:"El Chaltén, Santa Cruz Province, Argentina.",
          urlImagen:"https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        },

        {

          nombre: "Mendoza",
          descripcion:"Uspallata, Mendoza, Argentina.",
          urlImagen:"https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          
          },
    
          {
    
            nombre: "Bariloche",
            descripcion:"San Carlos de Bariloche, Río Negro, Argentina.",
            urlImagen:"https://images.pexels.com/photos/13593011/pexels-photo-13593011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          
          },
    
          {
    
            nombre: "Santa Cruz",
            descripcion:"El Chaltén, Santa Cruz Province, Argentina.",
            urlImagen:"https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          
          },

          {

            nombre: "Mendoza",
            descripcion:"Uspallata, Mendoza, Argentina.",
            urlImagen:"https://images.pexels.com/photos/573122/pexels-photo-573122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
            },
      
            {
      
              nombre: "Bariloche",
              descripcion:"San Carlos de Bariloche, Río Negro, Argentina.",
              urlImagen:"https://images.pexels.com/photos/13593011/pexels-photo-13593011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
            },
      
            {
      
              nombre: "Santa Cruz",
              descripcion:"El Chaltén, Santa Cruz Province, Argentina.",
              urlImagen:"https://images.pexels.com/photos/3428177/pexels-photo-3428177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            
            },


      

      
      ])
}




// POST

// npm install raw-body






