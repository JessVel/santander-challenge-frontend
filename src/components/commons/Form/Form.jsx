import React, { useState, useContext, useEffect } from 'react';
import formContect from '../../../context/Form/formContext';
import meetContext from '../../../context/Meet/meetContext';
import orderContex from '../../../context/Order/orderContex';
import weatherapiContext from '../../../context/WeatherApi/weatherapiContext'
import moment from 'moment';
import Spinner from '../../commons/Spinner/Spinner'
import Swal from "sweetalert2";
import './styles/form.css'

const Form = () => {

    const { form, showForm, hideForm } = useContext(formContect);
    const { createMeet, getMeet } = useContext(meetContext)
    const { order, getOrder } = useContext(orderContex);
    const { tempForecast, tempDay, getTemp, getTempbyDay} = useContext(weatherapiContext)


    const [meet, setMeet] = useState({
        name: "",
        date:"",
        temp:'',
        assistants:[],
      });
      
    const [ loading, setLoading ] = useState(false);

    
useEffect(() =>{

  getTemp()
  getTempbyDay(date, tempForecast)

  if(temp === '' && !tempDay)return;
  setMeet({
    ...meet,
    temp: tempDay
  })

}, [])

   const { name, date, assistants,temp } = meet;
  
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
            <select type="date" className="input-date" placeholder="Meet date..." name="date" value={date} onChange={onChange} >

            <option value="">-- Select a date--</option>
           
           { tempForecast ?
           
           
           tempForecast.map(item => <option type="date"  >{moment(item.Date).format("MMM Do YY")} </option>) : 
           <Spinner />
           }
            </select>
          </div>
          <div className="campo-form">
            <input type="text" className="input-date" placeholder="Assistants's e-mail..." name="assistants" value={assistants} onChange={onChange} />
          </div>
         { date  ?
           <div>On <span>{date}</span> the temperature will be <span name="temp" onChange={onChange} value={tempDay} >{tempDay}</span></div> : null
         }
  
          <div className="contenedor-input">
            <input type="submit" className="btn btn-primario btn-submit btn-block" value="Create"/>
          </div>
        </form>
      </div>
     );
}
 
export default Form;