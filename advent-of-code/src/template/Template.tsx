import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { input } from "./template-input";

export default function Template(): JSX.Element {
  return (
    <div className='Template card-body'>
      <h5 className='card-title'>December :</h5>
      <p className='card-text'>Describe: {}.</p>
      <p className='card-text'>Describe: {}.</p>
    </div>
  );
}
