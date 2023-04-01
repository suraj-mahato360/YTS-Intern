import React from 'react'
import travel1 from '../assets/img/life/Drawing/IMG-20230331-WA0024.jpg'
import travel2 from '../assets/img/life/Drawing/IMG-20230331-WA0025.jpg'
import travel3 from '../assets/img/life/Drawing/IMG-20230331-WA0026.jpg'
import travel4 from '../assets/img/life/Drawing/IMG-20230331-WA0027.jpg'
import travel5 from '../assets/img/life/Drawing/IMG-20230331-WA0028.jpg'



const ImgSlider3 = () => {
  const slides = [travel1,travel2,travel3,travel4,travel5];
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
          <div className="slideshowSlider w-[30rem] h-80 whitespace-nowrap transition-all ease-linear duration-[1s] lg:w-[20rem] lg:h-60" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          
            {slides.map((backImg, index) => (
              <img className="slide inline-block h-80 w-[30rem] lg:w-[20rem] lg:h-60 " src={ backImg } alt="" key={index} />
            ))}
          </div>
        </div>
    </>
  )
}

export default ImgSlider3


