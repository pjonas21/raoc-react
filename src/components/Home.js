import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import fireDb from "../firebase";

const Home = () => {

  const [dadosOcorrencias, setDadosOcorrencias] = useState({});

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
      })
      .catch((error) => console.log(error));
  }, []);

  const lastCvli = dadosOc.filter(val => val.tipo_2 === 'CVLI').sort((a,b) => a.data < b.data ? 1 : -1)
  const cityLastCvli = lastCvli.map(reg => reg.cidade)
  const dateLastCvli = lastCvli.map(reg => reg.data)
  const hourLastCvli = lastCvli.map(reg => reg.hora)

  const lastCvp = dadosOc.filter(val => val.tipo_2 === 'CVP').sort((a,b) => a.data < b.data ? 1 : -1)
  const cityLastCvp = lastCvp.map(reg => reg.cidade)
  const dateLastCvp = lastCvp.map(reg => reg.data)
  const hourLastCvp = lastCvp.map(reg => reg.hora)

  const lastWeapon = dadosOc.filter(val => val.tipo_2 === 'AP_ARMA').sort((a,b) => a.data < b.data ? 1 : -1)
  const cityLastWeapon = lastWeapon.map(reg => reg.cidade)
  const dateLastWeapon = lastWeapon.map(reg => reg.data)
  const hourLastWeapon = lastWeapon.map(reg => reg.hora)

  const lastDrug = dadosOc.filter(val => val.tipo_2 === 'AP_DROGA').sort((a,b) => a.data < b.data ? 1 : -1)
  const cityLastDrug = lastDrug.map(reg => reg.cidade)
  const dateLastDrug = lastDrug.map(reg => reg.data)
  const hourLastDrug = lastDrug.map(reg => reg.hora)

  return (
    <>
      <div id="home" className="content row mx-auto">
        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="danger" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Último CVLI</Card.Title>

              <Card.Text as="h3" className="mb-4">
                {cityLastCvli[0]}
              </Card.Text>

              <Card.Subtitle className="mb-2">
              {dateLastCvli[0]} - {hourLastCvli[0]}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="warning" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Último CVP</Card.Title>

              <Card.Text as="h3" className="mb-4">
                {cityLastCvp[0]}
              </Card.Text>

              <Card.Subtitle className="mb-2">
                {dateLastCvp[0]} - {hourLastCvp[0]}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="success" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Última Apreensão de Arma</Card.Title>

              <Card.Text as="h3" className="mb-4">
                {cityLastWeapon[0]}
              </Card.Text>

              <Card.Subtitle className="mb-2">
              {dateLastWeapon[0]} - {hourLastWeapon[0]}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="success" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Última Apreensão de Drogas</Card.Title>

              <Card.Text as="h3" className="mb-4">
                {cityLastDrug[0]}
              </Card.Text>

              <Card.Subtitle className="mb-2">
              {dateLastDrug[0]} - {hourLastDrug[0]}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
