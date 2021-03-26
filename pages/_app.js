import '../styles/globals.scss'
import React , { createContext} from "react"


export const myContext = React.createContext()
const bask = [{name: "name"}]

function MyApp({ Component, pageProps }) {
  return <myContext.Provider value={bask}><Component {...pageProps} /></myContext.Provider>
}

export default MyApp
