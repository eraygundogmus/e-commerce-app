import '../styles/globals.scss'
import React , { createContext} from "react"


export const myContext = React.createContext([])

function MyApp({ Component, pageProps }) {
  return <myContext.Provider value="empty"><Component {...pageProps} /></myContext.Provider>
}

export default MyApp
