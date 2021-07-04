import React, { useState } from "react";
import { Card } from "react-bootstrap";

const FormularioCadastro = (props) => {
  const initialData = {
    idOc: "",
    bairro: "",
    bpm: "",
    cia: "",
    cidade: "",
    data: "",
    hora: "",
    latitude: "",
    longitude: "",
    natureza: "",
    num_rop: "",
    procedimento: "",
    qtde_arma_fogo_ap: "",
    qtde_droga_ap: "",
    qtde_municoes_ap: "",
    qtde_vitima: "",
    tipo: "",
    tipo_2: "",
    tipo_arma: "",
  };

  const [values, setValues] = useState(initialData);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSend = (e) => {
    e.preventDefault();
    props.addEdit(values);
    console.log(values);
    setValues(initialData);
  };

  return (
    <div className="content mx-auto">
      <Card>
        <Card.Header as="h5">Registro de ocorrências</Card.Header>
        <Card.Body>
          <form
            className="row g-3"
            autoComplete="off"
            onSubmit={handleFormSend}
          >
            <div className="col-md-6">
              <label>Data: </label>
              <input
                type="date"
                className="form-control"
                name="data"
                value={values.data}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>Hora: </label>
              <input
                type="time"
                className="form-control"
                name="hora"
                value={values.hora}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>CIA: </label>
              <select
                className="form-control"
                name="cia"
                value={values.cia}
                onChange={handleInputChange}
              >
                <option> Selecione ... </option>
                <option value="1CIA">1ªCIA</option>
                <option value="3CIA">3ªCIA</option>
                <option value="4CIA">4ªCIA</option>
              </select>
            </div>
            <div className="col-md-2">
              <label>Batalhão: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: 4ºBPM"
                name="bpm"
                value={values.bpm}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label>Cidade: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: CANINDÉ"
                name="cidade"
                value={values.cidade}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label>Bairro / Localidade: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Centro, Localidade Siriema"
                name="bairro"
                value={values.bairro}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>Laitude: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: -4,252525"
                name="latitude"
                value={values.latitude}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>Longitude: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: -39,252525"
                name="longitude"
                value={values.longitude}
                onChange={handleInputChange}
              />
            </div>

            <div className="dropdown-divider"></div>

            <div className="col-md-4">
              <label>Natureza: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: HOMICÍDIO, ROUBO"
                name="natureza"
                value={values.natureza}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label>Tipo da ocorrência: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: A BALA, A PESSOA"
                name="tipo"
                value={values.tipo}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>Subtipo: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: CVLI, CVP"
                name="tipo_2"
                value={values.tipo_2}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2">
              <label>Arma Utilizada: </label>
              <select
                className="form-control"
                name="tipo_arma"
                value={values.tipo_arma}
                onChange={handleInputChange}
              >
                <option> Selecione ... </option>
                <option value="FOGO">Arma de fogo</option>
                <option value="BRANCA">Arma branca</option>
                <option value="OUTROS">Outros</option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Qtde arma de fogo ap.: </label>
              <input
                type="number"
                className="form-control"
                placeholder="Apenas números"
                name="qtde_arma_fogo_ap"
                value={parseInt(values.qtde_arma_fogo_ap)}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>Qtde droga ap.: </label>
              <input
                type="number"
                className="form-control"
                placeholder="Apenas números (kg)"
                name="qtde_droga_ap"
                value={parseFloat(values.qtde_droga_ap)}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>Qtde munições ap.: </label>
              <input
                type="number"
                className="form-control"
                placeholder="Apenas números"
                name="qtde_municoes_ap"
                value={parseInt(values.qtde_municoes_ap)}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>Qtde vítimas: </label>
              <input
                type="number"
                className="form-control"
                placeholder="Apenas números"
                name="qtde_vitima"
                value={parseInt(values.qtde_vitima)}
                onChange={handleInputChange}
              />
            </div>

            <div className="dropdown-divider"></div>

            <div className="col-md-3">
              <label>Procedimento realizado: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: TCO, FLAGRANTE, PERÍCIA"
                name="procedimento"
                value={values.procedimento}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>Nº do ROP: </label>
              <input
                type="number"
                className="form-control"
                placeholder="Apenas números"
                name="num_rop"
                value={values.num_rop}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <label>ID da Ocorrência </label>
              <input
                type="text"
                className="form-control"
                placeholder="Apenas números"
                name="idOc"
                value={
                  (values.idOc =
                    values.data.replace(/-/g, "") + values.cia + values.num_rop)
                }
                onChange={handleInputChange}
              />
            </div>

            <div className="col-12">
              <input
                type="submit"
                className="btn btn-primary"
                value="Registrar"
              />
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormularioCadastro;
