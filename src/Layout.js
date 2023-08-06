import { Fragment } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = ({children}) =>{
    return(
        <Fragment>
            <Navbar/>
            <main>
            {children}
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout