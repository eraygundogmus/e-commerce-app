import React from "react"
import ProductCard from "../components/ProductCard"
import { useState } from "react";

export default function Home(posts) {
  const [basket,setBasket] = useState(null)
  return (
    <div className="hello">
      <h1>hello world</h1>
      <div className="try products">
        <ProductCard posts={posts} basket={basket} />
      </div>
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
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
