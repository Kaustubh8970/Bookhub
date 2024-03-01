import './LatestArticle.css'

import Titletypeone from '../../UI/TitleTypeOne/Titletypeone'

import { lettestArticleData } from '../../data/data'

import { Link } from 'react-router-dom'

import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';


export default function LatestArticles() {
    return (
        <section className="latestArticle">
            <div className="conatiner latest-article-container">
                <Titletypeone Title={'Latest Articles'}
                    TitleTop={'Read our Articles'} />

                <div className="latest-article-content">
                    {
                        lettestArticleData.map(({ titLink, title, data, instLink, inspiration, fbLink, twitaLink, image }, index) => {
                           return(
                           <article className='latest-article' key={index}>
                                <div className="article-image">
                                    <img src={image} alt='' />
                                </div>
                                <div className="article-info">
                                <h5>{data}</h5>
                                <Link to={titLink}>
                                    <h3>{title}</h3>
                                </Link>
                            </div>
                             <div className="latest-article-social">
                                <p>{inspiration}</p>
                                <div className="article-social">
                                <a href={fbLink}><ImFacebook/></a>
                                <a href={instLink}><FiInstagram/></a>
                                <a href={twitaLink}><RiTwitterXLine/></a>
                                </div>
                           
                         
                            </div>
                            </article>
                        )
                        })
                    }
                </div>
                <Link to={'*'} className='btn btn-border'>Read all articles <span><BsArrowRight/></span></Link>
            </div>
        </section>
    )
}
