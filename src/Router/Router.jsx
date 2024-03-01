import { BrowserRouter, Routes , Route } from "react-router-dom";

import Home from "../Pages/Home";
import Notfound from "../Pages/Notfounf/Notfound";

import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

import Featurebooks from "../Components/FeatuerBooks/Featurebooks";
import BestSellingBooks from "../Components/BeatSellingBooks/BestSellingBooks";
import PopularBooks from "../Components/PopularBooks./PopularBooks";
import LatestArticles from "../Components/LatestArticles/LatestArticles";

export default function Router() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/featurebooks" element={<Featurebooks/>}/>
        <Route path="/bestselling" element={<BestSellingBooks/>}/>
        <Route path="/popularbooks" element={<PopularBooks/>}/>
        <Route path="/latest" element={<LatestArticles/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}