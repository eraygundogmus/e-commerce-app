import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function SingleProduct(props) {
    const images = props.props.post.media.images
/*     console.log(images) */
    return (
        <div className="singleproduct">
            <Carousel  thumbWidth="15%">
            {images.map((image) => (
                <img src={`https://${image.url}`}/>
            ))}
            </Carousel>
        </div>
    )
}

export default SingleProduct
