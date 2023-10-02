import Image from "next/image";
import imageI from "public/heroImageI.png";
import imageII from "public/heroImageII.png";
import imageIII from "public/heroImageIII.png";
import heroBgI from "public/herobg.png";
import heroBgII from "public/herobgI.png";

import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#fff] px-[100px] py-[150px] flex gap-x-40 items-center">
      <div>
        <h1 className="text-[#141414] font-sora text-[64px] leading-[100%] font-bold">
          Show Them Don’t Just Tell
        </h1>
        <p className="text-xl font-inter mt-5 mb-12 text-[#000]/75">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="text-[18px] font-workSans font-medium flex gap-x-3 py-[22px] px-6 text-primary-50 bg-primary-500 rounded-lg">
          <span>Install HelpMeOut</span>
        </button>
      </div>

      <div className="flex gap-x-4 p-10 relative">
        <div className="flex flex-col gap-y-[14px] z-[20]">
          <Image src={imageI} alt="Image" className="rounded" />
          <Image src={imageII} alt="Image" className="rounded w-full h-full" />
        </div>
        <div className="z-[20]">
          <Image
            src={imageIII}
            alt="image 3"
            className="rounded w-full h-full"
          />
        </div>
        <Image
          src={heroBgI}
          alt="I"
          className="absolute top-0 right-0 w-[200px] h-[200px] z-[10]"
        />
        <Image
          src={heroBgII}
          alt="II"
          className="absolute bottom-0 left-0 w-[200px] h-[200px z-[10]"
        />
      </div>
    </div>
  );
};

export default Hero;
