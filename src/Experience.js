import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import expList from "./constants/Experience.json";

export default class Experience extends Component {
  render() {
    const expTimeline = expList.map((item, key) => (
      <VerticalTimelineElement
        key={key}
        className="vertical-timeline-element--work"
        date={item.Date}
        contentStyle={{ backgroundColor: "green", color: "black" }}
        iconStyle={{ background: "green", color: "black" }}
        icon={
          <svg
            height="50"
            width="50"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="briefcase"
            className="svg-inline--fa fa-briefcase fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
            ></path>
          </svg>
        }
      >
        <h3 className="vertical-timeline-element-title">{item.Position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.Company}</h4>
        <h4 className="vertical-timeline-element-subtitle">{item.Location}</h4>
        <p>{item.Description}</p>
      </VerticalTimelineElement>
    ));
    return (
      <div>
        <VerticalTimeline>{expTimeline}</VerticalTimeline>
      </div>
    );
  }
}
