import React, { useEffect, useState } from 'react';
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Tricks.css"
import Trick from './Trick';
const Tricks = () => {
  const [tricks, setTricks] = useState([])
  useEffect(() => {
    fetch("https://fitness-server-tau.vercel.app/blogs")
      .then(res => res.json())
      .then(data => {
        setTricks(data)
      })
  }, [])
  return (
    <div className="container"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-delay="300"
    >
      <div className="tricks-container">
        <h1 className="tricks-heading">Read our tips and <br /> tricks
          <img src={shape} alt="" className='tricks-shape' />
        </h1>
        <div className="row grid-container">
          {
            tricks.map(trick => <Trick
              key={trick._id}
              trick={trick}
            ></Trick>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tricks;