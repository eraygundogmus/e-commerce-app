import React from 'react'
import Link from 'next/link'
import slug from "slug"

function ProductCard(props) {
    const prod = props.props.posts.products
    const categ = props.props.categories
    return (
        <div className="card">
            {prod.map((product) => (
                <Link href="/products/[slug]" as={`/products/${slug(product.name)}-${product.id}`}>
            <div key={product.id}>
            {product.name.slice(11).toUpperCase()}
            <img 
            src={`https://` + product.images[0].url}/>
            <h3> Price: {product.price.current.text}</h3>
            <h3> Left: {product.price.current.value}</h3>
            </div></Link>))}
        </div>
    )
}

export default ProductCard
