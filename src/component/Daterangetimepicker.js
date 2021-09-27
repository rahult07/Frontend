import React, { useState } from 'react';
import Daterangetimepicker from 'react-bootstrap-datetimerangepicker-edited';
import moment from 'moment';



export default function App(){
    const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment()
        .subtract(1, "month")
        .startOf("month"),
      moment()
        .subtract(1, "month")
        .endOf("month")
    ],
    "Last Year": [
      moment()
        .subtract(1, "year")
        .startOf("year"),
      moment()
        .subtract(1, "year")
        .endOf("year")
    ]
  };

  const handleEvent = (event, picker) => {
    console.log("start: ", picker.startDate._d);
    console.log("end: ", picker.endDate._d);
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  return (
    <div className="App">
      <Daterangetimepicker
        // startDate={new Date()}
        // endDate={new Date()}
        ranges={range}
        alwaysShowCalendars={true}
        onEvent={handleEvent}
      >
        <button className="reportrange">
          {moment(fromDate).format("DD/MM/YYYY")} to {moment(toDate).format("DD/MM/YYYY")} {<i className="fa fa-calendar-alt tx-select" />}
        </button>
      </Daterangetimepicker>
    </div>
  );
}