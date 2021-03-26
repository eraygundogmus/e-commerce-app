import React from "react"
import ProductCard from "../components/ProductCard"
import { useState, useContext } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Basket from "../components/Basket"
import { myContext } from "./_app"






export default function Home(props) {
  const [basket,setBasket] = useState([])
  const deger = useContext(myContext)
  console.log(deger)

  return (
    <div className="app">
      <Header />
      <div className="hero">
       <ProductCard props={props} basket={basket} />
      <Basket basket={basket} />
      </div>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {

    const res = await fetch('https://asos2.p.rapidapi.com/products/list?store=2&categoryId=27871&limit=48&offset=0&currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US', 
    {method: 'GET',
    headers:{
      "x-rapidapi-key": "104a0a8669mshc29e3cbebbb191bp1aba90jsn839a47e91ece",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const posts = await res.json()

/*     const cat = await fetch("https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "104a0a8669mshc29e3cbebbb191bp1aba90jsn839a47e91ece",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
    const categories = await cat.json() */

  return {
    props: {posts , /* categories */},
  }
}
