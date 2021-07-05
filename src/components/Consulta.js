import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Card } from "react-bootstrap";

const Consulta = () => {
  const [dadosOcorrencias, setDadosOcorrencias] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const dadosOc = Object.keys(dadosOcorrencias).map(function (oc) {
    return dadosOcorrencias[oc];
  });

  useEffect(() => {
    fireDb
      .firestore()
      .collection("ocgeral")
      .get()
      .then((snapshot) => {
        const dados = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dados.push(data);
        });
        setDadosOcorrencias(dados);
        //console.log(dados);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="content mx-auto">
        <div className="table-responsive">
          <Card>
            <Card.Header className="row">
              <h3 className="col-md-6">CONSULTA DE OCORRÊNCIAS</h3>
              <form className="col-md-4">
                <input
                  name="consulta"
                  id="iDconsulta"
                  autoComplete="off"
                  placeholder="Consultar"
                  type="search"
                  className="form-control search-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </Card.Header>
            <Card.Body>
            <table
              className="table table-striped table-sm"
              data-page-size="15"
              data-pagination="true"
            >
              <thead className="thead-light">
                <tr>
                  <td>Data</td>
                  <td>Hora</td>
                  <td>Cidade</td>
                  <td>CIA</td>
                  <td>Natureza</td>
                  <td>Tipo</td>
                  <td>ROP</td>
                </tr>
              </thead>
              <tbody id="tbody">
                {dadosOc
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.data
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.cidade
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.natureza
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.tipo
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.cia.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((item) => (
                    <tr key={item.idOc}>
                      <td>{item.data}</td>
                      <td>{item.hora}</td>
                      <td>{item.cidade}</td>
                      <td>{item.cia}</td>
                      <td>{item.natureza}</td>
                      <td>{item.tipo}</td>
                      <td>{item.num_rop}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Consulta;
