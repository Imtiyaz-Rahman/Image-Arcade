"use client";
import React from "react";

export default function GalleryImage() {

    let random = Math.random();
    const banner = "https://picsum.photos/550/700/?random&rnd="+random;
    // const banner = "https://picsum.photos/550/700/?random&rnd="+new Date().getTime();
    // const banner = "https://picsum.photos/550/700?<rand>";

  fetch(banner).then((res) => {
    if (res.ok) {
      console.log("API Image SUCCESS");
      console.log(banner);

      // const banner_image = document.getElementsByClassName('banner-image')
    } else {
      console.log("API Image Not Successful");
    }
  });

  return (
    <div>
      <img src={banner} alt="API Image" />
    </div>
  );
}
