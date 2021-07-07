import React from "react";
import FormularioCadastro from "./FormularioCadastro";
import fireDb from "../firebase";

const Cadastro = () => {
  const addEdit = (obj) => {
    fireDb.firestore().collection("ocgeral").add(obj);
  };

  return <FormularioCadastro addEdit={addEdit} />;
};

export default Cadastro;
