import React from "react";

const Newselements = ({ newsFeed }) => {
  return (
    <div className="mainDev">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-12">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {newsFeed?.description?.slice(0,90)}....
          </h5>
          <img src={newsFeed?.urlToImage||'./news-feed/src/Images/default.jpg'} />
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {newsFeed?.content}
          </p>
        </div>
        <div className="p-6 pt-0">
          <a
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            href={newsFeed?.url}
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>

    
  );
};

export default Newselements;
