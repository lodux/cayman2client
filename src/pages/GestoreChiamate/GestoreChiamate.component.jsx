import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'
import './GestoreChiamate.styles.scss';

export default function GestoreChiammate() {
  const [calls, setCalls]=useState([]);
  const [day, setDay]=useState(null);
  useEffect(() => {
    const fetchCalls = async () => {
      const res = await axios.get("https://cayman-server-r.herokuapp.com/api/chiama/ottieni-chiamate");
      setCalls(res.data);
    };
    fetchCalls();
  }, []);

  const handleClick=async (id)=>{
    console.log(id)
    const DeleteCalls = async () => {
      await axios.delete("https://cayman-server-r.herokuapp.com/api/chiama/"+id);
    };
    await DeleteCalls();
    window.location.reload(false)
  }

  const dayz=(d)=>{
    var newd = moment.parseZone(d).format("DD-MMM-YYYY");
    return newd;
  }


  return (
    <>
    { calls ? (
    <div className='gcCont'>
      <h1 className="gcTit">Gestore Chiamate</h1>
      {console.log(calls[0])}
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
          <svg className='delete' onClick={()=>handleClick(c._id)} xmlns="http://www.w3.org/2000/svg" width="22.903" height="19.395"><path d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"/></svg>

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
