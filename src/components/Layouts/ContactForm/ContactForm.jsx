import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mldjjvlr");

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }, [state.succeeded]);

  if (state.succeeded) { 
    return <p className='text-green-400 m-3'>¡Correo enviado con éxito!</p>; // Mensaje antes de recargar
  }
 
  return (
    <form onSubmit={handleSubmit} className='text-white flex flex-col items-center m-3'>
      <input
        className='w-[300px] h-[30px] min-w-[300px] min-h-[30px] m-3 border border-amber-50 rounded-xl'
        id="email"
        type="email" 
        name="email"
        placeholder=" Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <textarea
        className='w-[300px] h-[100px] min-w-[300px] min-h-[100px] m-3 border border-amber-50 rounded-xl resize-none'
        id="message"
        name="message"
        placeholder=" Mensaje"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <button 
        className="bg-green-700 mt-3 w-[120px] h-[35px] rounded-xl hover:scale-105 hover:bg-green-800" 
        type="submit" 
        disabled={state.submitting}
      >
        Enviar
      </button>
    </form>
  );
}