

import React , {Component} from 'react';
import imgTrainer1 from '../assets/coach1.jpg';
import imgTrainer2 from '../assets/coach2.jpg';
import imgTrainer3 from '../assets/coach3.jpg';
import './trainer.css'

class Trainer extends Component {
    trainer = [
        {id:1 , img : imgTrainer1, type: "Trainer" , name : "Samantha Gains" },
        {id:2 , img : imgTrainer2, type: "Trainer" , name : "Anna Strong" },
        {id:3 , img : imgTrainer3, type: "Leading Trainer" , name : "Ben Smith" },
  
      ];

    render(){
      
        return (

            <>
            {/* <BackgroundTrainer /> */}
                  <div className='trainer text-center'>
        <div className='container'>
        <div className='trainer-content'>
          <span>TRUE PROFESSIONALS</span>
          <h1 className='content'>OUR TRAINERS</h1>
        </div>

        <div className='row'>
          {this.trainer.map((el)=> (
            <div className='col-md-4 mb-4' key={el.id}>
            <div className='trainer-card'>
            <img src={el.img} className="card-img-top" alt='...' />
            <h5>{el.type} </h5>
              <h4>{el.name} </h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
          </div>
          ))}
        </div>
        </div>
        </div>

            </>

        
        )
    }

}

export default Trainer  