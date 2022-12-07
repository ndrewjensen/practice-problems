import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { input } from "./seventh-input";

export default function Seventh(): JSX.Element {
  return (
    <div className='Seventh card-body'>
      <h5 className='card-title'>December 7th: No Space Left On Device</h5>
      <p className='card-text'>Describe: {}.</p>
      <p className='card-text'>Describe: {}.</p>
    </div>
  );
}
