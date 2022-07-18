import React, { useEffect, useState } from 'react';
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Tricks.css"
import Trick from './Trick';
const Tricks = () => {
  const [tricks, setTricks] = useState([])
  useEffect(() => {
   fetch("http://localhost:5000/blogs")
   .then(res => res.json())
   .then(data => {
    setTricks(data)
   })
  }, [])
  return (
    <div className="container">
      <div className="tricks-container">
        <h1 className="tricks-heading service-heading">Read our tips and <br /> tricks
          <img src={shape} alt="" className='tricks-shape' />
        </h1>
        <div className="row">
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