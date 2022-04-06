import React, { Component } from 'react'
import Photo from '../components/Photo';
import '../styles/PersonalData.css'
import '../styles/normalize.css'

export default class PersonalData extends Component {
  render() {
    return (
        <form class="form">
        <h2 class="form__title" id="titulopag">Datos</h2>
        <Photo />
         <div class="form__container" id="form__container">
             
             <div class="form__group">
                <input type="text" id="name" class="form__input" placeholder=" " />
                <label for="user" class="form__label">Nombre</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="text" id="id" class="form__input" placeholder=" " />
                <label for="pass" class="form__label">CC / ID</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="text" id="fechanac" class="form__input" placeholder=" " />
                <label for="user" class="form__label">Fecha Nacimiento</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="text" id="profesion" class="form__input" placeholder=" " />
                <label for="pass" class="form__label">Profesion</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="text" id="direcresi" class="form__input" placeholder=" " />
                <label for="pass" class="form__label">Direccion residencia</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="email" id="email" class="form__input" placeholder=" " />
                <label for="user" class="form__label">Email</label>
                <span class="form__line"></span>
            </div>

            <div class="form__group">
                <input type="text" id="numtel" class="form__input" placeholder=" " />
                <label for="pass" class="form__label">Ext + numero telefono</label>
                <span class="form__line"></span>
            </div>

            <input type="submit" class="form__submit" id="btn" value="Siguiente" />
         </div>
         </form>
    )
  }
}
