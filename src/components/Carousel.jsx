import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const carouselData = [
  {
    url: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const length = carouselData.length;

const Carousel = () => {
  const [slide, setSlide] = useState(2);
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 relative justify-center items-center flex">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute text-white top-[50%] text-3xl cursor-pointer left-8"
      />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute text-white top-[50%] text-3xl cursor-pointer right-8"
      />
      {carouselData.map((item, index) => (
        <div className={slide === index ? "opacity-100" : "opacity-0"}>
          {slide === index && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
