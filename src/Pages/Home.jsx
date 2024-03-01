import React from 'react'
import Header from '../Components/Header/Header'
import Brands from '../Components/Brands/Brands'
import Featurebooks from '../Components/FeatuerBooks/Featurebooks'
import BestSellingBooks from '../Components/BeatSellingBooks/BestSellingBooks'
import PopularBooks from '../Components/PopularBooks./PopularBooks'
import Quote from '../Components/Quote/Quote'
import LatestArticles from '../Components/LatestArticles/LatestArticles'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <Featurebooks/>
    <BestSellingBooks/>
    <PopularBooks/>
    <Quote/>
    <LatestArticles/>
    </>
  )
}
