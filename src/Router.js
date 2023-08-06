import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import App from './App'
import Layout from './Layout'
import Placeholder from './Pages/Placeholder'

const AppRouter = () =>{
    return(
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<Placeholder/>} />
                <Route path="/home" element={<App/>} />
            </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter