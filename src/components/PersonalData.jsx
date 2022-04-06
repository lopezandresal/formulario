import React, { Component } from 'react'
import Photo from '../components/Photo';
import '../styles/PersonalData.css'
import '../styles/normalize.css'

export default class PersonalData extends Component {

  render() {

   function handleSubmit(event) {
        event.preventDefault();   //Prevenir que la pagina se vuelva a recargar cuando se le dé siguiente o
    }
      
    return (
        <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title" id="titulopag">Datos</h2>
        <Photo />
         <div className="form__container" id="form__container">
             
             <div className="form__group">
                <input type="text" id="name" className="form__input" placeholder=" " />
                <label htmlFor="name" className="form__label">Nombre</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="text" id="id" className="form__input" placeholder=" " />
                <label htmlFor="id" className="form__label">CC / ID</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="text" id="fechanac" className="form__input" placeholder=" " />
                <label htmlFor="fechanac" className="form__label">Fecha Nacimiento</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="text" id="profesion" className="form__input" placeholder=" " />
                <label htmlFor="profesion" className="form__label">Profesion</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="text" id="direcresi" className="form__input" placeholder=" " />
                <label htmlFor="direcresi" className="form__label">Direccion residencia</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="email" id="email" className="form__input" placeholder=" " />
                <label htmlFor="email" className="form__label">Email</label>
                <span className="form__line"></span>
            </div>

            <div className="form__group">
                <input type="text" id="numtel" className="form__input" placeholder=" " />
                <label htmlFor="numtel" className="form__label">Ext + numero telefono</label>
                <span className="form__line"></span>
            </div>

            <input type="submit" className="form__submit" id="btn" value="Siguiente"/>
         </div>
         </form>
    )
  }
}
