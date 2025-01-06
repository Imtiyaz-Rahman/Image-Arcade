'use client'
import React from "react"
import { get } from "http"

export default function BannerImage() {
    

    const banner = ('https://picsum.photos/1920/300')

    fetch(banner)
        .then(res => {
          if (res.ok) {
            console.log('API Banner SUCCESS')
          
            // const banner_image = document.getElementsByClassName('banner-image')
          } 
          else {
            console.log('API Banner Not Successful')
          };
        })
    

      return (

          <div className="p-5 flex content-bottom">
            <img src={banner} alt="Banner API Image"  /> 
          </div>
        );
    
        
    };

    