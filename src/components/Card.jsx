import React from 'react';
import music from '.././assets/musical-note.png';
import movie from '.././assets/red-play-button.png';
import books from '.././assets/study-icon.png';
import photo from '.././assets/google-photo.png';
import './card.css';

export default function () {
  return (
    <>
      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div-show max-w-screen-md min-h-[260px]">
        <img src={movie} alt="card-image" className="w-[75px] mb-4" />
        <p className="text-[24px] font-bold uppercase mb-7 ">Shows</p>
      </div>
      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div-book max-w-screen-md min-h-[260px]">
        <img src={books} alt="card-image" className="w-[75px] mb-4" />
        <p className="text-[24px] font-bold uppercase mb-7 ">Books</p>
      </div>
      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div-music max-w-screen-md min-h-[260px]">
        <img src={music} alt="card-image" className="w-[75px] mb-4" />
        <p className="text-[24px] font-bold uppercase mb-7 ">Music</p>
      </div>
      <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div-photo max-w-screen-md min-h-[260px]">
        <img src={photo} alt="card-image" className="w-[75px] mb-4" />
        <p className="text-[24px] font-bold uppercase mb-7 ">Photo</p>
      </div>
      {/* <div
        className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]">
        <img src={music} alt="card-image" className="w-[75px] mb-4" />
        <p className="text-[24px] font-bold uppercase mb-7 ">
          
        </p>
      </div> */}
    </>
  );
}
