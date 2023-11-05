import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Gallery from './components/Gallery';
import Location from './components/Location';
import BlockDetails from './components/BlockDetails';
import Layout from './components/Layout';
import Specifications from './components/Specifications';
function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
      <Routes> 
      <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/location' element={< Location />}></Route> 
                <Route exact path='/gallery' element={< Gallery />}></Route> 
                <Route exact path='/specifications' element={< Specifications />}></Route> 
                <Route path="/tower/:id" element={< BlockDetails />}></Route> 
          {/* <Route path="*" element={<NoPage />} /> */}
          </Routes> 
          </Layout>
      </Router>
    </div>
  )
}
export default App 