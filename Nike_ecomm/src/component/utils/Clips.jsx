import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div>
      <div className="relative h-14 w-16 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
        <img
          src={imgsrc}
          alt="img/clips"
          className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500"
        />
        <div className="bg-white blur-effect-theme absolute top-4 left-4 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 opacity-100 z-[100] w-7 h-7 lg:h-8 lg:w-8 flex items-center justify-center rounded-full">
          <PlayIcon className="icon-style text-slate-900 h-3 "/>
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </div>
  );
};

export default Clips;
