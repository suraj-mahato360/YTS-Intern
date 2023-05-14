import { Gallery } from "react-grid-gallery";
import React from "react";
import travel1 from "../assets/img/life/trekking/img7.jpg";
import travel2 from "../assets/img/life/trekking/img9.jpg";
import travel3 from "../assets/img/life/trekking/img12.jpg";
import travel4 from "../assets/img/life/trekking/imgT1.jpg";
import travel5 from "../assets/img/life/trekking/imgT2.jpg";
import travel6 from "../assets/img/life/trekking/imgT3.jpg";
import travel7 from "../assets/img/life/trekking/imgT4.jpg";
import travel8 from "../assets/img/life/trekking/WhatsApp Image 2023-03-31 at 21.42.30.jpg";
import Photo2 from "../assets/img/life/Photography/img3.jpg";
import Photo1 from "../assets/img/life/Photography/img2.jpg";
import Photo3 from "../assets/img/life/Photography/img4.jpg";
import Photo4 from "../assets/img/life/Photography/img5.jpg";
import Photo5 from "../assets/img/life/Photography/img8.jpg";
import Photo6 from "../assets/img/life/Photography/img10.jpg";
import Photo7 from "../assets/img/life/Photography/img11.jpg";
import Photo8 from "../assets/img/life/Photography/img13.jpg";
import Photo9 from "../assets/img/life/Photography/img14.jpg";
import Draw1 from "../assets/img/life/Drawing/IMG-20230331-WA0024.jpg";
import Draw2 from "../assets/img/life/Drawing/IMG-20230331-WA0025.jpg";
import Draw3 from "../assets/img/life/Drawing/IMG-20230331-WA0026.jpg";
import Draw4 from "../assets/img/life/Drawing/IMG-20230331-WA0027.jpg";
import Draw5 from "../assets/img/life/Drawing/IMG-20230331-WA0028.jpg";

const ImageAlbum = () => {
  const images = [
    {
      src: Draw2,
      width: 400,
      height: 260,
    },
    {
      src: travel1,
      width: 400,
      height: 260,
    },
    {
      src: travel2,
      width: 400,
      height: 260,
    },

    {
      src: travel3,
      width: 400,
      height: 260,
    },
    {
      src: travel4,
      width: 400,
      height: 260,
    },
    {
      src: Draw3,
      width: 400,
      height: 260,
    },
    {
      src: travel5,
      width: 400,
      height: 260,
    },
    {
      src: travel6,
      width: 400,
      height: 260,
    },
    {
      src: travel7,
      width: 400,
      height: 260,
    },
    {
      src: travel8,
      width: 400,
      height: 260,
    },
    {
      src: Draw4,
      width: 400,
      height: 260,
    },
    {
      src: Photo1,
      width: 400,
      height: 174,
    },
    {
      src: Photo2,
      width: 400,
      height: 260,
    },

    {
      src: Photo3,
      width: 400,
      height: 260,
    },
    {
      src: Photo4,
      width: 400,
      height: 260,
    },
    {
      src: Photo5,
      width: 400,
      height: 260,
    },
    {
      src: Draw5,
      width: 400,
      height: 260,
    },
    {
      src: Photo6,
      width: 400,
      height: 260,
    },
    {
      src: Photo7,
      width: 400,
      height: 260,
    },
    {
      src: Photo8,
      width: 400,
      height: 260,
    },
    {
      src: Photo9,
      width: 400,
      height: 260,
    },
    {
      src: Draw1,
      width: 400,
      height: 260,
    },
  ];

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default ImageAlbum;
