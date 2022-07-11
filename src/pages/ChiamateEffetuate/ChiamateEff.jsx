import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import './ChiamateEff.styles.scss'

export default function ChiamateEff() {
  const [calls, setCalls]=useState([]);
  const [day, setDay]=useState(null);
  useEffect(() => {
    const fetchCalls = async () => {
      const res = await axios.get("https://cayman-server-r.herokuapp.com/api/chiama/ottieni-registro");
      setCalls(res.data);
    };
    fetchCalls();
  }, []);



  const dayz=(d)=>{
    var newd = moment.parseZone(d).format("DD-MMM-YYYY");
    return newd;
  }


  return (
    <>
    { calls ? (
    <div className='gcCont'>
      <h1 className="gcTit">Registro Chiamate</h1>
      <span className='desc'>il registro chiamate comprende l'elenco di tutte le richieste di chiamate effettuate</span>
      <div className="sez">
      {calls.map((c)=>(
        <div className="callCont"> 
        <a href={"tel:+"+c.ntel} style={{textDecoration:"none",color:"black"}}>
          <span className='ntel'>{c.ntel}</span>
        </a> 
          <span className='name'>{c.nome} {c.cognome}</span>
          <span>fascia oraria:</span>
          <span className='name'>{dayz(c.day)}</span>
          <span className='name'>ore:{c.hour}</span>

        </div>
      ))}
      </div>
 
    </div>
    ) : (
      <>loading...</>
    )

    }    
    </>


  )
}

