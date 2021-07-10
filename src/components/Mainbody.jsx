import React from 'react'
import { BsFillCalendarFill } from "react-icons/bs";
import elfrances1 from '../assets/imagenes/elfrances1.jpg'
import Formulario from './Formulario';
import SliderImages from './SliderImages';




const Mainbody = () => {
    return (
        <main className='main'>
            <section className='main-section'>
                <h2>Colocacion de Membranas-Terrazas-Impermeabilizacion</h2>
                    <a href='#' className='btn-link'><BsFillCalendarFill/><p>Cotice ahora</p></a>
                    <article className='main-intro'>
                    <h3>Empresa de Impermeabilización de terrazas y techos.</h3>
                         <i> “Proyectos de calidad Terraza Transitable- Colocacion de Membrana asfaltica Impermeabilizacion de Terraza
                          “Trabajos con garantía escrita por 10 años.”</i>
                         
                         <p className='main-name'>  Membranas el frances de Alejandro Orfois</p>
                            Pida presupuesto +54 113928-0278
                    </article>
                    <article className='main-servicios'>
                        <h3>Realizamos trabajos de Impermeabilización de terrazas y techos- colocacion de membranas</h3>
                        <h4>Colocación Membranas Terraza Transitable- Colocacion de Membrana asfaltica Impermeabilizacion de Terraza</h4>
                        <h3>BRINDAMOS GARANTIA ESCRITA POR 10 AÑOS</h3>
                        <h3>Colocación de Membranas de tipo: Geotextil, Aluminio, y Pintura Asfáltica.
                        Plan de mantenimiento preventivo. Servicio de inspección anual, informe y diagnóstico.</h3>
                        <img src={elfrances1} alt="mebrana asfaltica" />
                        <div>
                            <div>
                                <h4>Trabajos con garantía escrita por 10 años.”</h4>
                                <p>Realizamos diferentes obras en edificios, viviendas, comercios e industrias utilizando materiales de primera calidad,
                                brindando a nuestros clientes una garantía por 10 años de un trabajo bien realizado que avala nuestra trayectoria y eficiente servicio.</p>
                            </div>
                            <div>
                                <h4>Urgencias inesperadas</h4>
                                <p>Contamos con un equipo de operarios capacitados para dar prioridad a nuestros clientes activos y resolver en tiempo y forma situaciones que se encuentren fuera del marco de la garantía.</p>
                            </div>
                            <div>
                                <h4>Plan de mantenimiento preventivo</h4>
                                <p>Acceda a los beneficios de estar un paso adelante ante cualquier tipo de situación inesperada prolongando la vida util del servicio realizado.</p>
                            </div>
                        </div>
                        
                        <p>Techos planos de hormigón, terrazas accesibles,
                           azoteas de edificios, muros de contención, en canteros,
                           bañeras, piscinas, canaletas, balcones, sótanos, cursos de agua, 
                           túneles subterráneos, en impermeabilizaciones bajo baldosa o bajo
                           carpeta, etc.Venta y Colocación de Membranas asfaltica en terraza 
                           estamos avalados por CIMA</p>
                           <br />
                            <div className='italic-text'>“Trabajos con garantía escrita por 10 años.”</div>
                            <br />
                            <p>
                            Somos una empresa familar con mas de 20 años en el mercado. Contamos con el personal calificado avalado por C.I.M.A. (Centro de instaladores de membranas asfálticas).</p>
                    </article>
                   
                   <SliderImages/>
                   
                    
                        <Formulario/>
                    
            </section>
            
        </main>
    )
}

export default Mainbody
