import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import First from "./first/First";
import Second from "./second/Second";
import Third from "./third/Third";
import Fourth from "./fourth/Fourth";
import Fifth from "./fifth/Fifth";
import Sixth from "./sixth/Sixth";
import Seventh from "./seventh/Seventh";
import Eighth from "./eighth/Eighth";
import Ninth from "./ninth/Ninth";
import Tenth from "./tenth/Tenth";
import Eleventh from "./eleventh/Eleventh";


export default function App() {
  return (
    <div className='App'>
      <h1 className='m-3'>Advent of Code</h1>
      <div className='container'>
        <div className='row'>
          <Card>
            <Eleventh />
          </Card>
          <Card>
            <Tenth />
          </Card>
          <Card>
            <Ninth />
          </Card>
          <Card>
            <Eighth />
          </Card>
          <Card>
            <Seventh />
          </Card>
          <Card>
            <Sixth />
          </Card>
          <Card>
            <Fifth />
          </Card>
          <Card>
            <Fourth />
          </Card>
          <Card>
            <Third />
          </Card>
          <Card>
            <Second />
          </Card>
          <Card>
            <First />
          </Card>
        </div>
      </div>
    </div>
  );
}
