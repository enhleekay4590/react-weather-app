import React from "react";
import DateUpdated from "./DateUpdated";
import UpdatedIcon from "./UpdatedIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function UpdateInfo(props) {
  return (
    <div className="UpdatedInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateUpdated date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <UpdatedIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
