import '../styles/globals.scss'
import React , {useState,useEffect } from "react"
import {myContext } from "../components/context"






function MyApp({ Component, pageProps }) {
  const [bask, setBask ] = useState([])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(bask))
  }, [bask])

  useEffect(() => {
    const data = localStorage.getItem('cart')
    if (data) {
      setBask(JSON.parse(data));
    }
  }, [])

  return <myContext.Provider value={{bask, setBask}}><Component {...pageProps} /></myContext.Provider>
}

export default MyApp
