import React from "react";

const CardArticleSmall = ({ img }) => {
  return (
    <div className="flex flex-row space-x-3">
      <img src={img} alt="" className="w-[100px] h-[100px] object-cover" />
      <div className="flex flex-col justify-center">
        <h2 className="text-sm font-normal text-emerald-300">
          Growmatch Article
        </h2>
        <p className="text-sm font-normal line-clamp-2">
          Tingkatkan Efisiensi Bisnis Anda dengan Manfaat Data Science:
          Pandangan Terbaru dalam Pengolahan Data.
        </p>
      </div>
    </div>
  );
};

export default CardArticleSmall;
