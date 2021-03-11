import React, { useState, useContext, useEffect } from 'react';
import formContect from '../../../context/Form/formContext';
import meetContext from '../../../context/Meet/meetContext';
import orderContex from '../../../context/Order/orderContex';
import axios from "axios";
import moment from 'moment';
import Swal from "sweetalert2";
import './styles/form.css'

const Form = () => {

    const { form, showForm, hideForm } = useContext(formContect);
    const { createMeet, getMeet } = useContext(meetContext)
    const { order, getOrder } = useContext(orderContex);


    const [meet, setMeet] = useState({
        name: "",
        date:"",
        assistants:[],
      });
      

    const [ result, setResult ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    // const [ temp, setTemp ] = useState([])

    
useEffect(() =>{

  const apiConsult = () =>{

    const URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/7894?apikey=0r8c47b5euYAxf9aiSHEVzfxYoZaAceI';
    
   
     
     const response = axios.get(URL).then(response =>{
      setLoading(true);
      setResult(response.data.DailyForecasts);
      console.log(response.data.DailyForecasts)
      console.log(response.data.DailyForecasts[0].Temperature)
    }).catch(error =>{console.log(error)})
  
   }
   setLoading(false)
   apiConsult()
}, [])



   const { name, date, assistants } = meet;

  //  getOrder()

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
           
           { result.map(item => <option type="date"  >{moment(item.Date).format("L")} </option>) }
            </select>
          </div>
          <div className="campo-form">
            <input type="text" className="input-date" placeholder="Assistants's e-mail..." name="assistants" value={assistants} onChange={onChange} />
          </div>
         { date  ?
           <div>El día {date} haran </div> : null
         }
  
          <div className="contenedor-input">
            <input type="submit" className="btn btn-primario btn-submit btn-block" value="Create"/>
          </div>
         
         
        </form>
      </div>
     );
}
 
export default Form;