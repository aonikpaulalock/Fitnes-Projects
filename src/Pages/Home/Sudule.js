import React from 'react';
import "../../Styles/Sudule.css"
const Sudule = ({ sudule }) => {
  const { time, taining, author } = sudule;
  return (
    <tr className="">
      <td>
        <h6 className="table-time">{time}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[0]}</h6>
        <h6 className="tainer">{author[0]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[1]}</h6>
        <h6 className="tainer">{author[1]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[2]}</h6>
        <h6 className="tainer">{author[2]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[3]}</h6>
        <h6 className="tainer">{author[3]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[4]}</h6>
        <h6 className="tainer">{author[4]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[5]}</h6>
        <h6 className="tainer">{author[5]}</h6>
      </td>
      <td>
        <h6 className="tainingg">{taining[6]}</h6>
        <h6 className="tainer">{author[6]}</h6>
      </td>
    </tr>
  );
};

export default Sudule;