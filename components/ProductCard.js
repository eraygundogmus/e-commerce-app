import React from 'react'

function ProductCard(props) {
    const prod = props.posts.posts.products
    console.log(props)
    return (
        <div className="card">
            {prod.map((product) => (
            <div key={product.id}>
            {product.name}
            <img 
            src={`https://` + product.images[0].url}/>
            <h3> Price: {product.price.current.text}</h3>
            <h3> Left: {product.price.current.value}</h3>
            </div>))}
            
        </div>
    )
}

export default ProductCard
