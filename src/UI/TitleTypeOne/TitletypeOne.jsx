// import React from 'react'
import './TitleTypeOne.css'

import victor from '../../assets/letestArticlesIamge/victor.png'

export default function Titletypeone({ClassName , Title , TitleTop}) {
  return (
   <div className={`titleTypeOne ${ClassName}`}>
    <small>{TitleTop}</small>
    <div className="heading-H">
        <h2>{Title}</h2>
        <div className="line"></div>
    </div>
    <img src={victor} className='victor'></img>
   </div>
  )
}
