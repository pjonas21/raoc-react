import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Bar } from "react-chartjs-2";
import { Card, Button } from "react-bootstrap";

const Charts = () => {
  const [dadosOcorrencias, setDadosOcorrencias] = useState({});

  const [chartData, setChartData] = useState({});


  const dadosOc = Object.keys(dadosOcorrencias).map(function (oc) {
    return dadosOcorrencias[oc];
  });

  const chart = () => {
    let victim = [];
    let cia = [];
    for (const obj of dadosOc) {
      victim.push(parseInt(obj.qtde_vitima));
      cia.push(obj.cia);
    }
    setChartData({
      labels: cia,
      datasets: [
        {
          label: "qtde de vitimas",
          data: victim,
          backgroundColor: ["rgba(75,192,192,0.6)"],
          borderWidth: 0,
        },
      ],
    });
    console.log(victim, cia);
  };

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

  return (
    <>
      <div className="content">
        <Button className="mb-2" onClick={chart} variant="outline-success">
          Carregar gráficos
        </Button>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                title: { text: "Qtde Vitimas", display: true },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Charts;
