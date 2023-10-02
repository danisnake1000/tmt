import React from 'react';
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const CardUi = ({ data }) => {
  return (
    <Card className="py-4 flex justify-center items-center m-8 transform transition-transform hover:scale-105 cursor-pointer mt-10 mb-20"> {/* Centrar horizontal y verticalmente */}
      <CardBody className="overflow-visible py-2 flex flex-col justify-center items-center"> {/* Centrar horizontal y verticalmente */}
        <Image
          style={{ height: "210px" }}
          alt="Card background"
          className="object-cover rounded-xl"
          src={data.urlImagen}
          width={290}
          height={290}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold"></p>
        <h4 className="font-bold text-large">{data.nombre}</h4>
        <small className="text-default-500">{data.descripcion}</small>
      </CardHeader>
    </Card>
  );
}

export default CardUi;