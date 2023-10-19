import React from "react";

const CardArticle = ({ img }) => {
  return (
    <div className="w-1/4 border-2 rounded-md border-slate-200 pb-4">
      <div className=" flex flex-col justify-start mx-4 my-4 ">
        <img
          src={img}
          alt="personOne"
          className="rounded-md w-[312px]  object-cover"
        />
        <h1 className="pt-4 text-base font-bold text-gray-900">
          GrowMatch Daily
        </h1>
        <p className="line-clamp-2 w-full max-w-xs text-sm text-gray-500">
          Google adalah mesin pencarian yang digunakan orang-orang untuk mencari
          informasi, ternyata Google juga bisa digunakan untuk mencari sebuah
          alamat ataupun nomor telepon yang terdapat pada
        </p>
        <p className="text-xs pt-2 font-normal text-text">18 september 2023</p>
      </div>
    </div>
  );
};

export default CardArticle;
