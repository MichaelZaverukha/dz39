import React ,{useState} from 'react';
import './main.scss';
import { isVisible } from '@testing-library/user-event/dist/utils';

function Main() {
      const [visible1, setVisibility1] = useState(false);
      const [visible2, setVisibility2] = useState(false);
      function block1(){
         setVisibility1(!visible1);
      }
      function block2(){
         setVisibility2(!visible2);
      }
   

   return(
      <main className='main'>
         <ul className="main__list">
            <li className="main__item">
               <div className="main__block-1"></div>
               <div className="main__content">
                  <p className="main__description">Monthly Revenue</p>
                  <h3 className="main__number">1385 $US</h3>
               </div>
            </li>
            <li className="main__item">
               <div className="main__block-2"></div>
               <div className="main__content">
                  <p className="main__description">New Orders</p>
                  <h3 className="main__number">12</h3>
               </div>
            </li>
            <li className="main__item" onClick={block1}>
               <div className="main__block-3"></div>
               <div className="main__content">
                  <p className="main__description">Panding Reviews</p>
                  <h3 className="main__number">3</h3>
               </div>
               <ul className={`main__item--list ${visible1 ? 'show-' : 'hide'}`} >
                  <li className="main__item--comment">
                     <div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                  </li>
                  <li className="main__item--comment">
                  <div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                  </li>
                  <li className="main__item--comment">
                  <div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                  </li>
               </ul>
            </li>
            <li className="main__item" onClick={block2}>
               <div className="main__block-4"></div>
               <div className="main__content">
                  <p className="main__description">New Customers</p>
                  <h3 className="main__number">9</h3>
               </div>
               <ul className={`main__item--list ${visible2 ? 'show' : 'hide'}`}>
                     <li className="main__item--comment">
                     <div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                     <li className="main__item--comment">
                     <div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                     <li className="main__item--comment"><div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                     <li className="main__item--comment"><div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                     <li className="main__item--comment"><div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                     <li className="main__item--comment"><div className="main__item--avatar"></div>
                     <p className="main__item--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto.</p>
                     </li>
                  </ul>
            </li>
         </ul>



      </main>
   )
}

export default Main;