import React from 'react'
import travel1 from '../assets/img/life/trekking/img7.jpg'
import travel2 from '../assets/img/life/trekking/img9.jpg'
import travel3 from '../assets/img/life/trekking/img12.jpg'
import travel4 from '../assets/img/life/trekking/imgT1.jpg'
import travel5 from '../assets/img/life/trekking/imgT2.jpg'
import travel6 from '../assets/img/life/trekking/imgT3.jpg'
import travel7 from '../assets/img/life/trekking/imgT4.jpg'
import travel8 from '../assets/img/life/trekking/WhatsApp Image 2023-03-31 at 21.42.30.jpg'


const ImgSlider = () => {
  const slides = [travel1,travel2,travel3,travel4,travel5,travel6,travel7,travel8];
  const delay = 3500;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex+1
        ),
      delay
    );

    return () => {};
  }, [index]);
  


  return (
    <>
        <div className="slideshow mb-auto max-w-2xl overflow-hidden">
          <div className="slideshowSlider w-[37rem] h-96 whitespace-nowrap transition-all ease-linear duration-[1s] lg:w-[20rem] lg:h-60" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          
            {slides.map((backImg, index) => (
              <img className="slide inline-block w-[37rem] h-96 lg:w-[20rem] lg:h-60" src={ backImg } alt="" key={index} />
            ))}
          </div>
        </div>
    </>
  )
}

export default ImgSlider


