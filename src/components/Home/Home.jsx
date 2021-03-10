import React, {useContext, useEffect} from "react";
import AuthContext from '../../context/auth/authContext';
import ListMeet from '../commons/ListMeet/ListMeet'
import "./styles/home.css";

const Home = () => {

  const { admin, authenticUser } = useContext(AuthContext);
  
  useEffect(() => {
    authenticUser();
    // eslint-disable-next-line
  }, []);


  return (
    <>

<ListMeet />

    </>
  );
  

};

export default Home;
