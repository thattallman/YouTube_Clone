import { useRouteError } from "react-router-dom";
import React from 'react'

const Error = () => {
    const err = useRouteError();
    const {status,statusText} = err;
  return (
    <>
    <h1>Oops Something Went Wrong</h1>
    <p>there is something wrong dear Rachit</p>
    <h2>{status + " : "+statusText}</h2>
    
    </>
  )
}

export default Error