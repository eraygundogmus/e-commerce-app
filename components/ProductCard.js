import React, { useEffect }from 'react'
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
      maxWidth: 260,
    },
  });

  
function ProductCard(props) {
    const prod = props.props.posts.products
    const categ = props.props.categories
    console.log(props)
    const classes = useStyles();


    return (
        <div className="card_container">
        <Grid container   
        direction="row"
        justify="flex-start"
        alignItems="baseline" 
        spacing={2}>
                {prod.map((product) => (
                <Link key={product.id} href="/products/[slug]" as={`/products/${slug(product.name)}-${product.id}`}>
                <Grid item xs={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt={product.name.slice(11)}
                        height="350"
                        image={`https://` + product.images[0].url}
                        title={product.name.slice(11)}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="subtitle2" component="h3">                            
                        {`${product.name.slice(11).toUpperCase().slice(0,35)}...`}
                        </Typography>
    {/*                 <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                        </Typography> */}
                        <Typography variant="body2" color="textSecondary" component="p">
                        {product.price.current.text}                         Left: {product.price.current.value}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                        Add to basket
                        </Button>
                        <Button size="small" color="primary">
                        Details
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
