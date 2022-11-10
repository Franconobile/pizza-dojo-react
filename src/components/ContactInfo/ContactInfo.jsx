import React from 'react'
import { ContactInfoWrapper } from './ContactInfoStyle'

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
        <div className='contact-box'>
            <div className='izq'></div>
            <div className='der'>
                <h2>Contáctenos</h2>
                <input type="text" className='field' placeholder='Tu Nombre' />
                <input type="email" className='field' placeholder='Tu Correo'/>
                <input type="text" className='field' placeholder='Tu Celular'/>
                <textarea className='field area' placeholder='Mensaje'></textarea>
                <button className='sendBtn'>Enviar</button>
            </div>
        </div>

    </ContactInfoWrapper>
  )
}

export default ContactInfo