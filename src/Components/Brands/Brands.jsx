// import React from 'react'
import './Brands.css'

import { brandsData } from '../../data/data'

export default function Brands() {
  return (
   <section className="Brands">
    <div className="container brands-container">
    {
        brandsData.map(({img}, index)=>{
            return(
                <div className="brands" key={index}>
                    <img src={img} alt=''></img>
                </div>
            )
        })
    }
    </div>
   </section>
  )
}
