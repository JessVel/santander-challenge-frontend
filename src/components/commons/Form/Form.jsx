import React, { useState, useContext } from 'react';
import formContect from '../../../context/Form/formContext';
import meetContext from '../../../context/Meet/meetContext';
import Swal from "sweetalert2";
import './styles/form.css'

const Form = () => {

    const { form, showForm, hideForm } = useContext(formContect);
    const { createMeet } = useContext(meetContext)


    const [meet, setMeet] = useState({
        name: "",
        date:"",
        assistants:[],
      });

   const { name, date, assistants } = meet;

    const onChange = (e) => {
        setMeet({
          ...meet,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) =>{
          e.preventDefault();

          if(name.trim() === '' || date.trim() === '' || assistants.trim() === ''){
              console.log("todos los campos son obligatiorios")
              return
          }

          createMeet(meet);

          setMeet({
            name: "",
            date:"",
            assistants:[],
          });
          hideForm()
      }

    // const handleSubmit = (e) => {
    //     e.preventDefault;
    //     console.log('submit')
    // }

    return ( 
        <div className="form">
        <form onSubmit={handleSubmit}>
        <div className="btn-flex">
            <button type="button" className="btn-cancel" onClick={() =>{hideForm()}}> &times;</button>
          </div>
          <div className="campo-form">
            <input type="text" className="input-text" placeholder="Meet name..." name="name" value={name} onChange={onChange} />
          </div>

          <div className="campo-date">
            <input type="date" className="input-date" placeholder="Meet date..." name="date" value={date} onChange={onChange} />
          </div>
          <div className="campo-form">
            <input type="text" className="input-date" placeholder="Assistants's e-mail..." name="assistants" value={assistants} onChange={onChange} />
          </div>

          <div className="campo-form">
            
          </div>
  
          <div className="contenedor-input">
            <input type="submit" className="btn btn-primario btn-submit btn-block" value="Create" />
          </div>
         
         
        </form>
      </div>
     );
}
 
export default Form;