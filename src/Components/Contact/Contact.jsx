

import React , {Component} from 'react';
// import { Navbar } from 'react-bootstrap';
import './contact.css'
import Footer from './../Footer/Footer';

class Contact extends Component {
    inputs = [
        {type: "text", placeHolder : "Name", id : 1},
        {type: "phone", placeHolder : "Phone", id : 2},
        {type: "email", placeHolder : "Email", id : 3}


    ]
    render() { 
        
            return (
        
                <>
                    <div className='contactus text-center'>
                        <div className='container'>
                            <h2>Contact </h2>
                        </div>
        
                    </div>
        
                    <div className='contact'>
                    <div className='container'>
                    {/* <h2 className='text-center mb-5'>Contact Us</h2> */}
                    <div className='row'>
                        <div className='col-md-6 inputs'>
                        {this.inputs.map((el) => (
                        <input type={el.type} className="input" placeholder={el.placeHolder} key={el.id}/>
                        
                        ))}
                        <select  class="form-select">
                             <option value="Occupation">Occupation</option>
                             <option value="Self Employeed">Self Employeed</option>
    </select>
                        </div>
                        <div className='col-md-6'>
                            <textarea  placeholder="Message"></textarea>
                            <span className='btn text-center'>Send Detail</span>
                        </div>
                    </div>
                    </div>
                    </div>
                   <Footer /> 
                </>
        
            )
    }
}
 
export default Contact;