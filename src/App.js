import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Gallery from './components/Gallery';
import Location from './components/Location';
import BlockDetails from './components/BlockDetails';
import Layout from './components/Layout';
import Specifications from './components/Specifications';
import FloorDetails from './components/FloorDetails';
import FlatDetails from './components/FlatDetails';
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
                <Route path="/:type/:id" element={< BlockDetails />}></Route> 
                <Route path="/floor/:type/:id" element={< FloorDetails />}></Route> 
                <Route path="/floor/flat/:id" element={< FlatDetails />}></Route> 
          {/* <Route path="*" element={<NoPage />} /> */}
          </Routes> 
          </Layout>
      </Router>
    </div>
  )
}
export default App 