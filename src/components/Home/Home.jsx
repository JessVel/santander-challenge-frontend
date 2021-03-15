import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ListMeet from "../commons/ListMeet/ListMeet";
import LogOut from "../auth/LogOut";
import "./styles/home.css";

const Home = () => {
  return (
    <>
      <ListMeet />

      <LogOut />
    </>
  );
};

export default Home;
