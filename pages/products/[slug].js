import React from "react"
import { useContext } from "react";
import slug from "slug";
import Header from "../../components/Header"
import Basket from "../../components/Basket"
import { myContext } from "../_app"
import SingleProduct from "../../components/SingleProduct"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
}));

export default function Products(props) {
  const classes = useStyles();
  const [size, setSize] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const mySetBask = useContext(myContext).setBask
  const myBask = useContext(myContext).bask
  const img = props.post.media.images[1].url
  const imgURL = `https://${img}`


  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const name = props.post.name.slice(11).toUpperCase()

  const onClickHandler = (event) => {
    size ? mySetBask(myBask.concat({ name: name, img: imgURL, size: size, price: props.post.price.current.text })) : console.log("you need to pick a size");
  }


  return (
    <div className="app">
      <Header/>
      <div className="hero">
        <SingleProduct props={props} />
          <div className="product-info">
            <h4>{props.post.name.slice(11).toUpperCase()}</h4>
            <h3>{props.post.price.current.text}</h3>
            <p>{props.post.info.aboutMe  ? props.post.info.aboutMe.replace(/(<([^>]+)>)/gi, "") : null}</p>
            <p>{props.post.info.sizeAndFit ? props.post.info.sizeAndFit.replace(/(<([^>]+)>)/gi, "") : null}</p>
            <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={size}
                onChange={handleChange}
              >
              {props.post.variants.map((e) => (<MenuItem key={e.id} value={e.brandSize}>{e.brandSize}</MenuItem>))}
              </Select>
            </FormControl>
            </div>
            <div className="cart_button">
            <Button onClick={onClickHandler} variant="contained" color="primary">
              Add to cart
            </Button>
            </div>
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
      "x-rapidapi-key": "2c1cbff938msh5243e6f1bfc5e69p13753ajsn18e03b26e5dc",
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
      "x-rapidapi-key": "2c1cbff938msh5243e6f1bfc5e69p13753ajsn18e03b26e5dc",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const post = await res.json()


  return {
    props: {post},
  }
}
