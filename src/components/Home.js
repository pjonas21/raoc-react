import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import fireDb from "../firebase";

const Home = () => {

  return (
    <>
      <div id="home" className="content row mx-auto">
        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="danger" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Último CVLI</Card.Title>

              <Card.Text as="h3" className="mb-4">
                Caridade
              </Card.Text>

              <Card.Subtitle className="mb-2">
                01/06/2021 - 15h23min
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="warning" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Último CVP</Card.Title>

              <Card.Text as="h3" className="mb-4">
                Canindé
              </Card.Text>

              <Card.Subtitle className="mb-2">
                01/06/2021 - 15h23min
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="success" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Última Apreensão de Arma</Card.Title>

              <Card.Text as="h3" className="mb-4">
                Paramoti
              </Card.Text>

              <Card.Subtitle className="mb-2">
                01/06/2021 - 15h23min
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card className=" text-center mb-3" bg="success" text="white">
            <Card.Body clasName="text-center">
              <Card.Title className="mb-3">Última Apreensão de Drogas</Card.Title>

              <Card.Text as="h3" className="mb-4">
                Caridade
              </Card.Text>

              <Card.Subtitle className="mb-2">
                01/06/2021 - 15h23min
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
