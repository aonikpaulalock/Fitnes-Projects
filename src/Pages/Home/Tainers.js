import React from 'react';
import "../../Styles/Tainers.css"
import shape from "../../Asset/Banner/Shape.png"
import Tainer from './Tainer';
const tainers = [
  { id: 1, name: "Certified trainer", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/b561rtS/tainning1.png" },
  { id: 2, name: "Nutrition & diet", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/rwC791V/taining2.png" },
  { id: 3, name: "Years of experience", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/1TttFXJ/taining3.png" },
  { id: 4, name: "Support & motivation", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/CQyxfmV/taining4.png" },
  { id: 5, name: "1-on-1 training", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/zn7BrBx/taining5.png" },
  { id: 6, name: "Commitment", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/3fnKwr6/taining6.png" },
]
const Tainers = () => {
  return (
    <div className='tainers'>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between tainer-service-gap">
          <div className="tainer-content w-50">
            <h1 className="Taining-heading">Taining Summary
              <img src={shape} alt="" className='Taining-satting' />
            </h1>
          </div>
          <div className="w-50 d-flex align-items-end justify-content-end">
            <button className="About-button ms-0">Learn More</button>
          </div>
        </div>
          <div className="row">
            {
              tainers.map(tainer => <Tainer
                key={tainer.id}
                tainer={tainer}
              ></Tainer>)
            }
        </div>
      </div>
    </div>
  );
};

export default Tainers;