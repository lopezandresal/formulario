import React, { Component } from 'react'
import '../styles/Socials.css';

export default class Socials extends Component {
  render() {
      

    onchange = e => {
        var checkbox = document.getElementById('checkRedes');
        if(checkbox.checked) {
            document.getElementById('userfb').disabled = true;
            document.getElementById('userig').disabled = true;
            document.getElementById('usertw').disabled = true;
            document.getElementById('userli').disabled = true;
        }
        else {
            document.getElementById('userfb').disabled = false;
            document.getElementById('userig').disabled = false;
            document.getElementById('usertw').disabled = false;
            document.getElementById('userli').disabled = false;
        }
    }

    return (
        <form className="form">
        <h2 className="form__title" id="titulopag">Redes Sociales</h2>
         <div className="form__container" id="form__container">
             
             <div className="form__group">
                <i className="bi bi-facebook">
                <input type="text" id="userfb" className="form__input" placeholder=" " />
                <label htmlFor="userfb" className="form__label">Nombre de usuario</label>
                <span className="form__line"></span>
                </i>
            </div>

            <div className="form__group">
                <i className="bi bi-instagram">
                <input type="text" id="userig" className="form__input" placeholder=" " />
                <label htmlFor="userig" className="form__label">Nombre de usuario</label>
                <span className="form__line"></span>
                </i>
            </div>

            <div className="form__group">
                <i className="bi bi-twitter">
                <input type="text" id="usertw" className="form__input" placeholder=" " />
                <label htmlFor="usertw" className="form__label">Nombre de usuario</label>
                <span className="form__line"></span>
                </i>
            </div>

            <div className="form__group">
                <i className="bi bi-linkedin">
                <input type="text" id="userli" className="form__input" placeholder=" " />
                <label htmlFor="userli" className="form__label">Nombre de usuario</label>
                <span className="form__line"></span>
                </i>
            </div>

            <div className="noredes__group">
                <input type="checkbox" id="checkRedes" className="noredes__input" placeholder=" " onChange={e => this.onchange(e)} />
                <label htmlFor="x" className="noredes__label">No uso redes</label>
                <span className="form__line"></span>
            </div>  

            <input type="submit" className="form__submit" id="btn1" value="Atras" />

            <input type="submit" className="form__submit" id="btn2" value="Siguiente" />
         </div>
         </form>
    )
    
  }
}
