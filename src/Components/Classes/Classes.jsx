

import React , {Component} from 'react';

// import './classess.css';
import img1 from '../assets/classes1.jpg';
import img2 from '../assets/classes2.jpg';
import img3 from '../assets/classes3.jpg';
import img4 from '../assets/classes4.jpg';
import img5 from '../assets/classes5.jpg';
import img6 from '../assets/classes6.jpg';

class  Classess extends Component {
    classes = [
        {id:1, img : img1 , nameOne : "Strength" , nameTwo :"Weightlifting" },
        {id:2, img :img2 , nameOne : "Cardio" , nameTwo :"Indoor Cycling" },
        {id:3, img : img3 , nameOne : "Strength" , nameTwo :"Kettlebell Power" },
        {id:4, img : img4 , nameOne : "Functional" , nameTwo :"Core Power" },
        {id:5, img : img5 , nameOne : "Functional" , nameTwo :"Mobility Circle" },
        {id:6, img : img6 , nameOne : "Cardio" , nameTwo :"Body Works" },
      ];
    render(){
        return (

            <div className='our-classes text-center'>
          <div className='container'>
            <span>WHAT WE CAN OFFER</span>
            <h2 className='content'>OUR CLASSES</h2>
            
            <div className='row'>

      {this.classes.map((el) =>(
        <div className='col-md-4 mb-3' key={el.id}>
              <div class="card">
              <img src={el.img} class="card-img-top" alt='...' />

  <div class="card-body">
    <h5 class="card-title one">{el.nameOne} </h5>
    <h5 class="card-title">{el.nameTwo} </h5>
  </div>
</div>
</div>
      )
      )}
     </div>

          </div>
        </div>
        )
    }
}
export default Classess;