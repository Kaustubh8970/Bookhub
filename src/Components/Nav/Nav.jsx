// import React from 'react'
import './Nav.css'

import { Link , NavLink  } from 'react-router-dom'

import Logo from '../../assets/letestArticlesIamge/logo.png'

import { navLinks ,navRight } from '../../data/data'

import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

import{useState} from 'react';

export default function Nav() { 
    const[isNavLinksShowing , setIsNavLinkShowing]= useState(false);
  return (
    <>
     <nav>
         <div className="container nav-container">
             <Link to={'/'} className='logo'>
                 <img src={Logo} alt='Logo'></img>
            </Link>
             <h3>BookHub</h3>
         
             <ul className='nav-links'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/featurebooks' >Featured books</NavLink>
                <NavLink to='/bestselling' >Best Selling</NavLink>
                <NavLink to='/popularbooks' >Popular Books</NavLink>
                <NavLink to='/latest' >Latest</NavLink>
                <NavLink to='/' >Contact</NavLink>
             </ul>
            {/* --------------------Nav right------------------- */}


            <div className="nav-right">
                {
                     navRight.managements.map(({item,index})=>{
                        return(
                            <Link key={index}  target='_blank'  className='manegement-icons' to={item}>
                                {/* <item.icon/> */}
                            </Link>
                        )
                     })
                }
                <button className='menu-button' onClick={()=> 
                setIsNavLinkShowing(!isNavLinksShowing)}>
                    {
                        !isNavLinksShowing ?  <VscMenu /> : <IoMdClose />

                    }
                 </button>
            </div>    
       
          </div> 
     </nav>
 
 
    </>
  )
}
