import React, { Component } from "react";
import Coder from "./Coder";
import ImageAvatars from "./Avatar";
import Hacker from "./Hacker";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Education from "./Education";
import officeImage from "./assets/images/profile.jpg";
import hackerImage from "./assets/images/hacked.jpg";
import gradImage from "./assets/images/grad.JPG";
import coderImage from "./assets/images/coder.JPG";
import Experience from "./Experience";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  rootCoder: {
    width: "100%",
    backgroundColor: "rgb(52, 235, 155)"
  },
  rootHacker: {
    width: "100%",
    backgroundColor: "#372963"
  }
});

export default function Landing({ parentCallback }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Coder");
  const [bgcolor, setBGcolor] = React.useState("rgb(52, 235, 155)");

  function handleChange(event, newValue) {
    setValue(newValue);
    if (newValue == "Coder") {
      setBGcolor("rgb(52, 235, 155)");
    } else if (newValue == "Hacker") {
      setBGcolor("#372963");
    } else if (newValue == "Education") {
      setBGcolor("rgb(52, 235, 155)");
    } else if (newValue == "Experience") {
      setBGcolor("rgb(52, 235, 155)");
    }
  }
  var displayMain;
  var image;
  var displayStyles;

  // React.useEffect(() => {
  //   if (count > 1) {
  //     console.log('Threshold of over 1 reached.');
  //   } else {
  //     console.log('No threshold reached.');
  //   }
  // }, [value]);

  if (value == "Coder") {
    displayMain = <Coder />;
    image = coderImage;
    displayStyles = classes.rootCoder;
    // parentCallback(value);
  }
  if (value == "Hacker") {
    displayMain = <Hacker />;
    image = hackerImage;
    displayStyles = classes.rootHacker;
    // parentCallback(value);
  }
  if (value == "Education") {
    displayMain = <Education />;
    image = gradImage;
    displayStyles = classes.rootCoder;
    // parentCallback(value);
  }
  if (value == "Experience") {
    displayMain = <Experience />;
    image = officeImage;
    displayStyles = classes.rootCoder;
    // parentCallback(value);
  }
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: " + bgcolor + "; }"}</style>
      </Helmet>
      <ImageAvatars theImage={image}></ImageAvatars>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={displayStyles}
        showLabels
      >
        <BottomNavigationAction
          label="Coder"
          value="Coder"
          icon={
            <svg
              height="50"
              width="50"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="code"
              className="svg-inline--fa fa-code fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
              ></path>
            </svg>
          }
        />
        <BottomNavigationAction
          label="Hacker"
          value="Hacker"
          icon={
            <svg
              height="50"
              width="50"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-secret"
              className="svg-inline--fa fa-user-secret fa-w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"
              ></path>
            </svg>
          }
        />
        <BottomNavigationAction
          label="Education"
          value="Education"
          icon={
            <svg
              height="50"
              width="50"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="graduation-cap"
              className="svg-inline--fa fa-graduation-cap fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
              ></path>
            </svg>
          }
        />
        <BottomNavigationAction
          label="Experience"
          value="Experience"
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
        />
      </BottomNavigation>
      {displayMain}
    </div>
  );
}
