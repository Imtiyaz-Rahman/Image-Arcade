"use client";
import React from "react";

export default function BannerImage() {
  const banner = "https://picsum.photos/1920/300";

  fetch(banner).then((res) => {
    if (res.ok) {
      console.log("API Banner SUCCESS");

      // const banner_image = document.getElementsByClassName('banner-image')
    } else {
      console.log("API Banner Not Successful");
    }
  });

  return (
    <div>
      <img src={banner} alt="Banner API Image" />
    </div>
  );
}
