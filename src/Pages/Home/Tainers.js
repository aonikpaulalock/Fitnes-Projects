import React from 'react';
import "../../Styles/Tainers.css"
import shape from "../../Asset/Banner/Shape.png"
import Tainer from './Tainer';
import { useNavigate } from 'react-router-dom';
const tainers = [
  { id: 1, name: "Certified trainer", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/b561rtS/tainning1.png" },
  { id: 2, name: "Nutrition & diet", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/rwC791V/taining2.png" },
  { id: 3, name: "Years of experience", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/1TttFXJ/taining3.png" },
  { id: 4, name: "Support & motivation", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat?", img: "https://i.ibb.co/CQyxfmV/taining4.png" },
  { id: 5, name: "1-on-1 training", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/zn7BrBx/taining5.png" },
  { id: 6, name: "Commitment", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus sunt quaerat veniam fuga consequatur?", img: "https://i.ibb.co/3fnKwr6/taining6.png" },
]
const Tainers = () => {
  const navigate = useNavigate()
  return (
    <div className='tainers'>
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="row px-4 py-4">
          <div className="col-md-6">
            <h1 className="Taining-heading">Taining Summary
              <img src={shape} alt="" className='Taining-satting' />
            </h1>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
            <button className="About-button ms-0" onClick={() => navigate("/aboutpage")}>Learn More</button>
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