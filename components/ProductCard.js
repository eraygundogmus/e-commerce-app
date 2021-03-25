import React from 'react'
import Link from 'next/link'
import slug from "slug"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
  });

  
function ProductCard(props) {
    const prod = props.props.posts.products
    const categ = props.props.categories
    const classes = useStyles();
    return (
        <div className="card_container">
        <Grid container spacing={4}>
                {prod.map((product) => (
                <Link key={product.id} href="/products/[slug]" as={`/products/${slug(product.name)}-${product.id}`}>
                <Grid item xs={2}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="340"
                        image={`https://` + product.images[0].url}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">                            
                        {product.name.slice(11).toUpperCase()}
                        </Typography>
    {/*                 <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                        </Typography> */}
                        <Typography variant="body2" color="textSecondary" component="p">
                        {product.price.current.text}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Left: {product.price.current.value}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                        Add to basket
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                        </CardActions>
                </Card>
                </Grid>
                </Link>
                ))}
        </Grid>
        </div>
    )
}

export default ProductCard
