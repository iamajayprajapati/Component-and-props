import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import './index.css';
import Sdata from "./Sdata"

function ncard(val){
  return(
    <Card imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
    />
  )
}
ReactDOM.render(
  <>
    <h1>NETFLIX ORIGINAL SERIES</h1>
    {Sdata.map(ncard)}
    </>,
  document.getElementById('root')
);
