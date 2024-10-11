import React from "react";

const FlexContent = ({ ifExists,endpoint: { title, heading, text, img, url, btn } }) => {
  return (
    <div
      className={`items-center justify-between lg:flex lg:justify-center nike-container ${ifExists? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className="max-w-lg lg:max-w-none w-full text-center lg:text-start grid justify-items-center lg:justify-items-start">
        <h1 className="text-3xl lg:text-4xl font-bold text-gradient">
          {heading}
        </h1>
        <h1 className="text-2xl lg:4xl md:3xl font-semibold text-slate-900">
          {title}
        </h1>
        <p className="lg:text-sm my-4 text-slate-900">{text}</p>
        <a
          href={url}
          className="flex items-center"
          target={"_blank"}
          role="button"
        >
          <button
            type="button"
            className="button-theme text-slate-100 py-1.5 shadow-slate-900 bg-slate-900"
          >
            {btn}
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
        <img src={img} alt={`img/${heading}`} className={`w-auto object-fill transitions-theme ${ifExists ? 'h-44 md:h-52 lg:h-56 rotate-6 hover:-rotate-12': 'h-48 md:h-60 lg:h-72 rotate-[19deg] hover:rotate-[12]'}`} />
      </div>
    </div>
  );
};

export default FlexContent;
