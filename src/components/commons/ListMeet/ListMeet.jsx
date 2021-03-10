import React, { useContext, useEffect } from 'react';
import CardMeet from '../CardMeet/CardMeet';
import Form from '../Form/Form'
import meetContext from '../../../context/Meet/meetContext';
import authContext from '../../../context/auth/authContext';
import formContect from '../../../context/Form/formContext'
import './styles/listmeet.css'

const ListMeet = () => {

    const { meets, getMeet } = useContext(meetContext);
    const { admin } = useContext(authContext);
    const { form, showForm } = useContext(formContect);

    useEffect(()=>{
      getMeet()
    }, [])

    return ( 
  
      <>
     <div className="container-flex">
     <h2 className="meets-title">My meets</h2>
      { admin === "T" && !form ? <button type="button" className="create-meet" onClick={() => {showForm()}}>Create meet</button> : null}

      { form ? <Form /> : null }
     </div>
        <div className="list-container">
          
        <ul className="list-meet">
          {meets.length === null ? <li style={{ textAlign: "center" }}>There's no meetings</li> : meets.map(meet => <CardMeet key={meet._id} meet={meet} />)}
        </ul>
        </div>
        </>
     );
}
 
export default ListMeet;