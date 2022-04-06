import React, { Component } from 'react'
import '../styles/Photo.css'
export default class PersonalInformation extends Component {
    
  render() {
    
    onchange = e => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.onload = r => {
             document.getElementById("img").src = r.target.result
             localStorage.setItem('image',r.target.result)
             console.log("Se ha guardado la imagen en el localStorage");
         };      
         //document.getElementById("img").setAttribute('src',localStorage.getItem('image'));
        reader.readAsDataURL(files[0])
    }

    return (
    <div className="container">
        <div onSubmit={this.onFormSubmit}>
        <img className="home__img" id="img" alt=" "/>
        <label className="Subirfoto" htmlFor="file">Subir foto</label>
        <input type="file" accept="image/png,image/jpeg" id="file" name="file" onChange={e => this.onchange(e)} />
      </div>
        
    </div>
    )
  }
}
