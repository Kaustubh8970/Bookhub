import './PopularBooks.css'

import Titletypeone from '../../UI/TitleTypeOne/Titletypeone'

import { galleryData } from '../../data/data'

import { useState } from 'react';

export default function PopularBooks() {

    //Active Button Funtionality

    const[activeButton, setActiveButton]= useState('all');

    const handleFilterChange =(category)=>{
        setActiveButton(category);
    }

    //filter gallery funtionality
    const filterItems = activeButton === 'all' ? galleryData : galleryData.
    filter((item)=>item.category === activeButton);

    return (
        <section className='PopularBooks'>
            <div className="container popularbooks-container">
                <Titletypeone TitleTop={'Some quality items'}
                    Title={'Popular Books'} className={'popularbooks-title'} />


                {/* -------------Filter Tabs Button----------------- */}

                <div className="filterbuttons">
                    <button 
                    className={activeButton ==='all' ?'active' : ''}
                    onClick={()=> handleFilterChange('all')}
                    >
                        All
                    </button>
                    <button
                    className={activeButton ==='Business' ?'active' : ''}
                    onClick={()=> handleFilterChange('Business')}
                    >
                        Business
                    </button>
                    <button
                     className={activeButton ==='Technology' ?'active' : ''}
                     onClick={()=> handleFilterChange('Technology')}
                    >
                        Technology
                    </button>
                    <button
                     className={activeButton ==='Adventure' ?'active' : ''}
                     onClick={()=> handleFilterChange('Adventure')}
                    >
                        Adventure
                    </button>
                    <button
                     className={activeButton ==='Romantic' ?'active' : ''}
                     onClick={()=> handleFilterChange('Romantic')}
                    >
                        Romantic
                    </button>
                    <button
                     className={activeButton ==='Fictional' ?'active' : ''}
                     onClick={()=> handleFilterChange('Fictional')}
                    >
                        Fictional
                    </button>
                </div>

                {/* ---------------filter Books Contents-------------- */}
                <div className="gallery">
                    {
                        filterItems.map(({name , writer , price , image}, index)=>{
                            return(
                                <div className="gallery-item" key={index}>
                                    <div className="popularbook-image">
                                        <img src={image} alt=''></img>
                                    </div>
                                    <div className="popularbook-info">
                                        <h4>{name}</h4>
                                        <div><small>{writer}</small></div>
                                        <h5><span>{price}</span></h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </section>
    )
}
