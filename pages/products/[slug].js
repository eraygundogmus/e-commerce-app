import React from "react"
import { useContext, useState, useEffect } from "react";
import slug from "slug";
import Header from "../../components/Header"
import Basket from "../../components/Basket"
import { myContext } from "../../components/context"
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
  const contx = React.useContext(myContext)
  const [data, setData] = useState()
  const classes = useStyles();
  const [size, setSize] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const mySetBask = contx.setBask
  const myBask = contx.bask
  const [image, setImage] = useState()
  const [myProps, setProps] = useState()

  useEffect(() => {
    setProps(props)
  },[])



  useEffect(() => {
    setData(props.name)
  }, [])

  useEffect(() => {
    setImage(props.img)

  }, [])


  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  const onClickHandler = (event) => {
    const img = image
    const name = data
    const price = props.post.price.current ? props.post.price.current.text : null
    size ? mySetBask(myBask.concat({ name: name, img: img, size: size, price: price })) : console.log("you need to pick a size");
  }


  return (
    <div className="app">
      <Header/>
      <div className="hero">
        <SingleProduct props={props} />
          <div className="product-info">
            <h4>{data}</h4>
            <h3>{props.post.price.current ? props.post.price.current.text : null}</h3>
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
      "x-rapidapi-key": "14caa9b1dfmshd63ef10b7f0284cp1d0e94jsnae451078aa47",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "useQueryString": true
    },
  })
    const postData = await res.json()
    const posts = postData.products

    return {
    paths: posts.map(product => {
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
      "x-rapidapi-key": "14caa9b1dfmshd63ef10b7f0284cp1d0e94jsnae451078aa47",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  }).catch(err => {console.log(err)})
    const post = await res.json()
    const name =  post.name ? post.name.slice(11).toUpperCase() : null
    const imgURL = post.media ? post.media.images[0].url : null
    const img = `https://${imgURL}`


  return {
    props: {post, name, img},
  }
}
