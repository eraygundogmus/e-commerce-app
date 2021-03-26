import React from "react"
import { useContext } from "react";
import slug from "slug";
import Header from "../../components/Header"
import Basket from "../../components/Basket"
import { myContext } from "../_app"
import SingleProduct from "../../components/SingleProduct"

export default function Products(props) {
  const basket = useContext(myContext)
  return (
    <div className="app">
      <Header/>
      <div className="hero">
{/*       <h4>{props.post.name}</h4> */}
      <SingleProduct props={props} />
      <div className="product-info">
                info
      </div>
      <Basket/>
      </div>

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
