import './BestSellingBooks.css'

import TItleTypeTwo from '../../UI/TItleTypeTwo/TItleTypeTwo'

import TreeShape from '../../assets/letestArticlesIamge/treeShape.png'

import { sellingBooksData } from '../../data/data'
import { Link } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";

export default function BestSellingBooks() {
  return (
 
      <section className='BestSellingBook'>
        <div className='treeShape'>
            <img src={TreeShape} alt=''></img>
        </div>

            {/* -================Selling book content========= */}


           {
             sellingBooksData.map(({img, infoTitle ,infoTitleTop, desc, price, shopbtnLink})=>{
                return(
                    <div className="conatiner bestselling-container">
                        <div className="selling-book-left">
                            <img src={img}></img>
                        </div>
                        <div className="selling-book-right">
                            <TItleTypeTwo Title={'Best selling book'}
                            className='sellingBookTitle'/>
                            <div><small>{infoTitleTop}</small></div>
                            <h3>{infoTitle}</h3>
                            <p>{desc}</p>
                            <h5><span>{price}</span></h5>
                            <Link to={shopbtnLink} className='btn'>
                                <small>Shop it now</small>
                                <IoIosArrowRoundForward />
                            </Link>
                        </div>
                    </div>
                )
            })
           }
            

      </section>

  )
}
