

import React , {Component} from 'react';
import Trainer from '../Trainer/Trainer';
import './home.css'

import imgSale1 from '../assets/Sale.jpg';
import imgSale2 from '../assets/Sale2.jpg';
import imgNews1 from '../assets/gym_services_image1.jpg';
import imgNews2 from '../assets/gym_services_image2.jpg';
import imgNews3 from '../assets/gym_services_image3.jpg';
import Footer from '../Footer/Footer';
import Classess from '../Classes/Classes';



class Home extends Component {
      memeberShip = [{
        id:1,
        plan :"BEGINNER PLAN" , price: 40,classess : "3 classes" ,   attech : "FOR ROOKIES" ,  moment : "1 Free personal training"
      },
      {
        id:2,
        plan :"PREMIUM PLAN" , price: 60,  attech : "FOR FITNESS LOVERS" , classess : "5 classes" , moment : "2 Free personal training"
      
      },
      {
        id:3,
        plan :"ULTIMATE PLAN" , price: 80, attech : "FOR THE ADDICTED" ,classess : "7 classes" , moment : "7 Free personal training"
      
      },
    ];

    sales = [
      {id: 1 , img : imgSale1},
      {id: 2 , img : imgSale2}

    ];


    contactUs = [
      {name : "VISIT US" , type : "360 KING STREET 15333 NEW YORK, NY"},
      {name : "CALL US" , type : "01555245948"},
      {name : "Mail Us" , type : "Contact Form"},
                ];
    News = [
      {img: imgNews1 , content : "New cross fit course" , id : 1},
      {img: imgNews2 , content : "Best cardio exercise" , id : 2},
      {img: imgNews3 , content : "New Body Core Courses" , id : 3}

    ]

    render() {
        
    return (
<>
        <div className='home'>
        <div className='overlay'></div>
            <div className='container'>
            <div className='home-content'>
            <span>Real Athletes </span>
                <h1>Just Don't <br/>
                Give Up
                 </h1>
            </div> 
            </div>
        </div>
         {/* Start WHAT WE CAN OFFER */}
         <Classess />

        {/* Start TEAM CHALLENGES */}
        <div className='team-challenges'>
        <div className='overlay'></div>
            <div className='container'>
            <div className='content-team'>
            <h4>TEAM CHALLENGES</h4>
                <h1>PARTNER UP <br/> DOUBLE POWER</h1>
                <span className='btn btn-danger '>Choose your trainer</span>
            </div>
            </div>
        </div>

        {/* Start BECOME A PART OF US */}
        <div className='memberships text-center'>
        <div className='container'>
          <div className='membership-content'>
            <span>BECOME A PART OF US</span>
            <h2 className='content'>OUR MEMBERSHIPS</h2>
          </div>

          <div className='row'>
            {this.memeberShip.map((el) => (
              <div className='col-md-4 mb-4' key={el.id}>
              <div className='card-price'>
                <h4>{el.plan} </h4>
                <span className='price'>$ {el.price} </span>
                <p className='lead'>{el.attech} </p>
                <span className='btn'>Select Plan</span>
                <ul className='list-unstyled'>
                  <li> <span>Unlimited</span> access to the gym</li>
                  <li> <span> {el.classess} </span> per week</li>
                  <li> <span>One Year</span> memberships</li>
                  <li> <span>FREE</span> drinking package</li>
                  <li>{el.moment} </li>

                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
        </div>

        {/* Start Salse  */}
        <div className='sales'>
          <div className='container'>
            <div className='row'>
              {this.sales.map((el)=> (
                <div className='col-md-6 mb-4'  key={el.id}>
              <img src={el.img} className="card-img-top" alt='...' />
              </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Start GUIDED CLASSES  */}

        <div className='guided text-center'>
        <div className='overlay'></div>
          <div className='container'>
          <div className='guided-content'>
            <span>GUIDED CLASSES</span>
            <h1>Leave your <br/> comfort zone</h1>
            <span className='btn'>Choose your class</span>

          </div>

          </div>
        </div>
        {/* TRUE PROFESSIONALS */}
        
          <Trainer />
        {/* Start CONTACT US  */}
        <div className='contact-us text-center'>
          <div className='container'>
            <div className='contact-content'>
              <span className=''>A WARM WELCOME</span>
              <h2 className='mb-5 mt-3'>CONTACT US</h2>
            </div>

              <div className='row'>
                {this.contactUs.map((el)=> (
                  <div className='col-md-4 mb-4' key={el.id}>
                  <div className='contact-card'>
                    <span>{el.name} </span>
                    <h4>{el.type} </h4>
                  </div>
                </div>
                ))}
              </div>
          </div>
        </div>
        {/* RECENT CLUB TALK */}
        <div className='news text-center'>
          <div className='container'>
            <div className='content-news'>
              <span>RECENT CLUB TALK</span>
              <h2 className='mb-4 mt-4'>NEWS AREA</h2>
            </div>
            <div className='row'>
             {this.News.map((el) => (
              <div className='col-md-4 mb-5' key={el.id}>
              <div className="card">
            <img src={el.img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span className="card-title">March 25, 2022</span>
          <h4 className="card-title">{el.content} </h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className='btn'>Read more</button>
  </div>
</div>
              </div>
             ))}
            </div>
          </div>
        </div>

        {/* Start Copy Right  */}
        <Footer />
        </>
    )
}
}
export default Home;