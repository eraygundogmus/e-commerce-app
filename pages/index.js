import React from "react"
import ProductCard from "../components/ProductCard"
import { useState, useContext } from "react";
import Header from "../components/Header"
import Basket from "../components/Basket"
import { myContext } from "./_app"



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
      "x-rapidapi-key": "2c1cbff938msh5243e6f1bfc5e69p13753ajsn18e03b26e5dc",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const posts = await res.json()


  return {
    props: {posts},
  }
}
