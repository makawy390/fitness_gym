

import React , {Component} from 'react';
import {BrowserRouter,Routes ,Route ,  Link} from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
// import Trainer from '../Trainer/Trainer';

import './nav.css';
import BackgroundTrainer from './../Trainer/BackgroundTrainer';
import FinalClassess from './../Classes/FinalClasses';
import Blog from './../Blog/Blog';
class Navbar extends Component {

  
  render(){
    return (
        <div>
        <BrowserRouter>
       

        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container">
    <Link  to= "/" className='navbar-brand'>FITNESS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to = "/trainer" className='nav-link'>Trainer</Link></li>
            <li className='nav-item'><Link to="/classess  " className='nav-link' >Classess</Link></li>
            <li className='nav-item'><Link to = "/contact" className='nav-link'>Contact Us</Link></li>
            <li className='nav-item'><Link to="/blog" className='nav-link' >Blog</Link></li>
      </ul>
    </div>
  </div>
</nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/trainer' element={<BackgroundTrainer />} />
            <Route path='/classess' element={<FinalClassess/>} />
            <Route path='/classess' element={<FinalClassess/>} />
            <Route path='/blog' element={<Blog/>} />


            {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
        </BrowserRouter>

       
        </div>
        
    )
      }
}
export default Navbar;