import React from 'react'

const Formulario = () => {
    return (
       <form action="" method="post" className='formulario'>
           <label htmlFor="nombre">Nombre y apellido</label>
           <input type="text" placeholder='Ingrese su nombre' id='nombre' />
           <label htmlFor="numero">Numero telefonico</label>
           <input type='tel' id='numero' placeholder='11-0000-0000'/>
           <label htmlFor="email">Correo Electronico</label>
           <input type='email'id='email'/>
            <label htmlFor="mensaje">Comentario o mensaje</label>
            <textarea name="mensaje" id="mensaje"></textarea>
       </form>
    )
}

export default Formulario
