import React from "react"
import { useState } from "react";
import slug from "slug";

export default function Products(props) {
  return (
    <div className="app">
      <h3>I am building an e-commerce app</h3>
      <h4>{props.post.name}</h4>
    </div>
  )
}


export async function getStaticPaths() {
    const res = await fetch('https://asos2.p.rapidapi.com/products/list?store=2&categoryId=27871&limit=48&offset=0&currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US', 
    {method: 'GET',
    headers:{
      "x-rapidapi-key": "104a0a8669mshc29e3cbebbb191bp1aba90jsn839a47e91ece",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const posts = await res.json()
    
    return {
    paths: posts.products.map(product => {
        return { params : { slug: `${slug(product.name)}-${product.id}` }}
    }),
      fallback: false
    };
  }


export async function getStaticProps(params) {
    const id = params.params.slug.split("-").slice(-1)[0]
    const res = await fetch(`https://asos2.p.rapidapi.com/products/detail?id=${id}&sizeSchema=US&store=US&lang=en-US&currency=USD`, 
    {method: 'GET',
    headers:{
      "x-rapidapi-key": "104a0a8669mshc29e3cbebbb191bp1aba90jsn839a47e91ece",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const post = await res.json()


  return {
    props: {post},
  }
}
