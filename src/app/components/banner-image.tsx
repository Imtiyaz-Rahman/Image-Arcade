"use client";
import React from "react";

export default function BannerImage() {
  const banner = "https://picsum.photos/1920/300";
  // Inputting the desired image size towards the URL

  fetch(banner).then((res) => {
     // Collecting the results from the API and creating a results check
    if (res.ok) {
      // A response will be provided in the console every time the component is called
      console.log("API Banner SUCCESS");

    
    } else {
      // An else  will show if the API was unable to be called
      console.log("API Banner Not Successful");
    }
  });

  // Returning the results of the API call into an Image
  return (
    <div>
      <img src={banner} alt="Banner API Image" />
    </div>
  );
}
