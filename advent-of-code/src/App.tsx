import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./first/First";
import Second from "./second/Second";
import Third from "./third/Third";
import { Card } from "react-bootstrap";

export default function App() {
  return (
    <div className='App'>
      <h1 className='m-3'>Advent of Code</h1>
      <div className='container'>
        <div className='row'>
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
