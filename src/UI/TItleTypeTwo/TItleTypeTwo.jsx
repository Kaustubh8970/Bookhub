import React from 'react'
import victor from '../../assets/letestArticlesIamge/victor.png'
import './TitleTypeTwo.css'

export default function TItleTypeTwo({ClassName, Title}) {
  return (
    <div className={`titleTypeOne ${ClassName}`}>
    <h2>{Title}</h2>
    <img src={victor} className='victor'></img>
   </div>
  )
}
