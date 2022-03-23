
import React ,{Component} from 'react';
import Footer from '../Footer/Footer';
import './blog.css';
import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog2.jpg';
import img3 from '../assets/blog3.jpg';

class Blog extends Component{

    blogs = [
        {img : img1 , type : "New cross fit course",id :1},
        {img : img2 , type : "Best cardio exercise",id :2},
        {img : img3 , type : "New Body Core Courses",id :3},

    ];
    openingHours = [
        {id : 1 , day  : "Monday"},
        {id : 2 , day  : "Tuesday"},
        {id : 3 , day  : "Wednesday"},
        {id : 4 , day  : "Thursday"},
        {id : 5 , day  : "Friday"},
        {id : 6 , day  : "Saturday"},
        {id : 7 , day  : "Sunday"},

    ]
    render(){
        return ( 
            <>
                <div className='blog'>
                <div className='container'>
                    <h2 className='text-center'>Our Blog</h2>
                </div>
            </div>
            <div className='card-img'>
                <div className='container'>
                <div className='row'>
                <div className='col-md-8 '>
                    <div className='row'>
                    {this.blogs.map((el) =>(
                    <div className='col-md-9 mb-5' key={el.id}>
                    <img src={el.img} alt='...' className='mb-3' />
                    <div className='text-span mb-4'>
                        <span>08. Jan</span>
                        <span>TTDEMo2</span>
                        <span>CARADIo</span>
                    </div>
                    <h4 className='text-title mb-4'>{el.type} </h4>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,…
                    </p>
                    <span className='link'>Read More</span>
                </div>
                ))}
                    </div>
                </div>
                <div className='col-md-4 right-class'>
                <input type="text" placeholder='Search term' className='input mb-4'/>
                <h5 className='title mt-2'>Recent Posts</h5>
                <hr/>
                {this.blogs.map((el) =>(
                    <ul className='list-unstyled' key={el.id}>
                        <li className='list'>{el.type} </li>
                    </ul>
                ))}
                <div className='opening-hours mt-5'>
                    <h5 className='title'>OPENING HOURS</h5>
                    <hr/>
                    {this.openingHours.map((el) => (
                        <ul className='list-unstyled' key={el.id}>
                        <li className='row'> 
                        <span className='col'>{el.day}</span>
                        <span className='col  ms-5'>07:00-17:00</span>
                         </li>
                         <hr/>
                       
                    </ul>
                    ))}


                </div>
                </div>
                </div>
                    
                </div>
            </div>
    
            <Footer/>
            </>
         );
    }

}

export default Blog;