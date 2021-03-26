import '../styles/globals.scss'
import React , { createContext, useState } from "react"


export const myContext = React.createContext()

function MyApp({ Component, pageProps }) {
  const [bask, setBask ] = useState([])

  return <myContext.Provider value={{bask, setBask}}><Component {...pageProps} /></myContext.Provider>
}

export default MyApp
