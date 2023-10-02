import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className="footer">

      <div className="footerUp">

      <img src="/public/Logo/logo.jpg" alt="" />
            

        <div className="left">

            <h3>Acerca de nosotres</h3>
            <p>TRIEX VIAJES Y TURISMO  - EVT Leg. 17971 /  EX-2021-86449268- -APN-DRAV#SGP</p>
            <p>RAZON SOCIAL:  TRAVELFAP S.A.S.</p>
            <p>Cuit: 30-71673940-2</p>

          <p>Para ver la disposición habilitante haga</p>

           
          <a href="/nic.pdf" target="_blank">CLICK AQUI</a>

        </div>

        <div className="rigth">
          <h3>Contacto</h3>
          <p>
            TRAVELFAP S.A.S.EVT Leg. 17971 / EX-2021-86449268- -APN-DRAV#SGP
          </p>
          <p>Cuit: 20-30057153-1</p>
          <p>Teléfono: </p>
          <p>Horario de Atención: 9 a 18</p>
          <p>Email:alejandro@tmtoperadora.com.ar </p>
          <p>, Local Virtual, -.</p>

          <div className="botonesContacto">
            <button> Agencia Socia </button>
            <button> Local Virtual </button>
          </div>

          <p>
            Para ver la disposición habilitante haga
          </p>

          <a href="/nic.pdf" target="_blank">CLICK AQUI</a>
          
        </div>
      </div>

      <hr />

      <p style={{ padding: "10px 100px 50px 100px", textAlign: "center" }}>
        {" "}
        Dirección General de Defensa y Protección al Consumidor - Consultas y/o
        denuncias El titular de los datos personales tiene la facultad de
        ejercer el derecho de acceso a los mismos en forma gratuita a intervalos
        no inferiores a seis meses, salvo que se acredite un interés legítimo al
        efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº
        25.326". "La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES,
        Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender
        las denuncias y reclamos que se interpongan con relación al
        incumplimiento de las normas sobre protección de datos personales.
      </p>

      <div className="footerDown">
        <div className="ley">
          <p>
           
            Ley 24.240 Autoridad Nacional de aplicación Defensa de las y los
            Consumidores. Para reclamos ingrese aquí  <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes">DENUNCIA CONTRA UNA AGENCIA</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
