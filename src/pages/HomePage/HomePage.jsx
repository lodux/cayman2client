import React, { useContext } from 'react'
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './HomePage.styles.scss'

export default function HomePage() {
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        console.log(user)
    },[])
  return (
    <div className='hpcont'>
   <h1 className="avvisi">
        AVVISI
    </h1> 
   
    </div>
  )
}
