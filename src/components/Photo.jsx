import React, { Component } from 'react'
import '../styles/Photo.css'
export default class PersonalInformation extends Component {
    
  render() {
    
    onchange = e => {
        let files = e.target.files;
        console.log(files);
        let reader = new FileReader();
        reader.onload = r => {
             console.log(r.target.result);
             document.getElementById("img").src = r.target.result
         };
        reader.readAsDataURL(files[0]);
    }
    
    return (
    <div className="container">
        <div onSubmit={this.onFormSubmit}>
        <img className="home__img" id="img"/>
        <label className="Subirfoto" for="file">Subir foto</label>
        <input type="file" accept="image/png,image/jpeg" id="file" name="file" onchange={e => this.onchange(e)} />
      </div>
        
    </div>
    )
  }
}
