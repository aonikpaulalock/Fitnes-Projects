import React from 'react';
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Tricks.css"
import Trick from './Trick';
const tricks = [
  {
    id: 1,
    img: "https://i.ibb.co/1dVBdWM/ticks1.png",
    tainer: "Jome bell",
    name: "TRAINING",
    details: "The 10 best exercises to do in your park",
    tainerImg: "https://i.ibb.co/hmB9h8Z/tik1.png"
  },
  {
    id: 2,
    img: "https://i.ibb.co/KXHTSRW/ticks2.png",
    tainer: "Jome bell",
    name: "TRAINING",
    details: "The interesting mental health benefits of exercise",
    tainerImg: "https://i.ibb.co/N3mx2MP/tik2.png"
  },
  {
    id: 3,
    img: "https://i.ibb.co/r3Rjx39/ticks3.png",
    tainer: "Jome bell",
    name: "FITNESS",
    details: "The 10 best exercises to do in your park",
    tainerImg: "https://i.ibb.co/x1BM1By/tik3.png"
  }
]
const Tricks = () => {
  return (
    <div className="container">
      <div className="tricks-container">
        <h1 className="tricks-heading service-heading">Read our tips and <br /> tricks
          <img src={shape} alt="" className='tricks-shape' />
        </h1>
        <div className="row">
          {
            tricks.map(trick => <Trick
              key={trick.id}
              trick={trick}
            ></Trick>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tricks;