"use client";
import React from "react";

export default function GalleryImage() {

    let random = Math.random();
    // Getting a random value from 0 - 1 with the Math library
    const banner = "https://picsum.photos/550/700/?random&rnd="+random;
    // Appending the random value onto the URl

  fetch(banner).then((res) => {
    // Collecting the results from the API and creating a results check
    if (res.ok) {
      console.log("API Image SUCCESS");
      // A response will be provided in the console every time the component is called
    
    } else {
      console.log("API Image Not Successful");
      // An else  will show if the API was unable to be called
    }
  });

  // Returning the results of the API call into an Image
  return (
    <div>
      <img className="border-4" src={banner} alt="API Image" />
    </div>
  );
}
