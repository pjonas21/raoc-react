import React from "react";
import FormularioCadastro from "./FormularioCadastro";
import { Card } from 'react-bootstrap'
import fireDb from "../firebase";

const Cadastro = () => {
  const addEdit = (obj) => {
    fireDb.firestore().collection("ocgeral").add(obj);
    //fireDb.database().ref("ocgeral").push(obj);
  };

  return (
    <>


            <FormularioCadastro addEdit={addEdit} />


    </>
  );
};

export default Cadastro;
