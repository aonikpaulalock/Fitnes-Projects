import React from 'react';
import { Table } from 'react-bootstrap';
import "../../Styles/Sudules.css"
import Sudule from './Sudule';
const sudules = [
  {
    id: 1,
    time: "09.00 PM",
    taining:
      ["Pilates", "Fit Body", "Yoga", "Cross Fit", "Pilates", "", "Fit Body"],
    author:
      [
        "Floyd Miles",
        "Ralph Edwards",
        "Leslie Alexander",
        "Esther Howard",
        "Cody Fisher",
        "",
      "Jenny Wilson"]
  },
  {
    id: 2,
    time: "11:00 PM",
    taining:
      ["Pilates", "Fit Body", "", "Cross Fit", "Pilates", "Cross Fit", ""],
    author:
      [
        "Floyd Miles",
        "Ralph Edwards",
        "",
        "Esther Howard",
        "Cody Fisher",
        "Jenny Wilson",
        ""]
  },
  {
    id: 3,
    time: "03:00 AM",
    taining:
      ["", "Fit Body", "Yoga", "Cross Fit", "Pilates", "", "Fit Body"],
    author:
      [
        "",
        "Ralph Edwards",
        "Leslie Alexander",
        "Esther Howard",
        "Cody Fisher",
        "",
        "Ronald Richards"]
  },
  {
    id: 4,
    time: "05:00 AM",
    taining:
      ["Pilates", "Fit Body", "Yoga", "Cross Fit", "", "Cross Fit", "Fit Body"],
    author:
      [
        "Floyd Miles",
        "Ralph Edwards",
        "Leslie Alexander",
        "Esther Howard",
        "",
        "Jenny Wilson",
        "Ronald Richards"]
  },
  {
    id: 5,
    time: "03:00 AM",
    taining:
      ["Pilates", "", "Yoga", "Cross Fit", "Pilates", "", "Fit Body"],
    author:
      [
        "Floyd Miles",
        "",
        "Leslie Alexander",
        "Esther Howard",
        "Cody Fisher",
        "",
        "Ronald Richards"]
  },

]
const Sudules = () => {
  return (
    <div className="table-container">
      <h1 className="schedule-main-heading">Classes Schedule</h1>
      <div className="container">
        <div className="table-responsive">
          <Table bordered borderless >
            <thead className="table-heading-back">
              <tr className="table-sub-head">
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Tuesday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
                {/* <th>Update</th> */}
              </tr>
            </thead>
            <tbody>
              {
                sudules.map(sudule => <Sudule
                  key={sudule.id}
                  sudule={sudule}
                ></Sudule>)

              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Sudules;