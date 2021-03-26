import React from "react"
import ProductCard from "../components/ProductCard"
import { useState, useContext } from "react";
import Header from "../components/Header"
import Basket from "../components/Basket"
import { myContext } from "../components/context"



export default function Home(props) {
  const basket = useContext(myContext)

  return (
    <div className="app">
      <Header />
      <div className="hero">
       <ProductCard props={props} />
      <Basket/>
      </div>
    </div>
  )
}
export async function getStaticProps() {

    const res = await fetch('https://asos2.p.rapidapi.com/products/list?store=2&categoryId=27871&limit=48&offset=0&currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US', 
    {method: 'GET',
    headers:{
      "x-rapidapi-key": "14caa9b1dfmshd63ef10b7f0284cp1d0e94jsnae451078aa47",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const posts = await res.json()


  return {
    props: {posts},
  }
}
