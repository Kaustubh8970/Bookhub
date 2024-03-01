import './Quote.css'

import TitleTypeTwo from '../../UI/TItleTypeTwo/TItleTypeTwo'

import { quoteData }  from '../../data/data'

export default function Quote() {
  return (
  <section className='Quote'>
    <div className="conatiner quote-container">
        <TitleTypeTwo Title={'Quote of the day'} className='Quote-title'/>
       
            {
               quoteData.map(({  quote , speaker},index)=>{
                    return(
                        <article key={{index}}>
                            <p>{quote}</p>
                            <h5>{speaker}</h5>
                        </article>
                    )
                })
            }
   
    </div>
  </section>
  )
}
