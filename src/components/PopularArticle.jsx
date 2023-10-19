import React from "react";
import CardArticle from "./CardArticle";
import Images from "../assets";
import CardArticleSmall from "./CardArticleSmall";

const PopularArticle = () => {
  return (
    <section className="pt-20">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <h1 className="text-gray-900 text-[32px] leading-9 font-semibold">
          Pupular Article
        </h1>
        <p className="mb-2 text-text">
          Artikel yang membantumu menambah wawasan belajarmu bersama Growmatch
        </p>

        <div className="p-2">
          <div className="flex flex-col">
            <div className="flex space-x-2">
              <CardArticle img={Images.Keyboard} />
              <CardArticle img={Images.Keyboard} />
              <CardArticle img={Images.Keyboard} />
              <CardArticle img={Images.Keyboard} />
            </div>
            <div className="flex pt-8 w-full space-x-8">
              <div className="w-3/12 relative">
                <img
                  src={Images.BigArticle}
                  alt=""
                  className="w-full h-full object-cover rounded-md absolute top-0 left-0"
                />
                <div className="absolute bottom-0 left-0 bg-black/40 py-4 px-6">
                  <h2 className="text-base font-normal text-emerald-300">
                    Growmatch Article
                  </h2>
                  <p className="text-lg font-normal ">
                    Revolusi Data Science: Mengungkap Potensi Besar di Era
                    Digital
                  </p>
                </div>
              </div>
              <div className="w-9/12 flex ">
                <div className="w-1/3 flex flex-col space-y-4">
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                </div>
                <div className="w-1/3 flex flex-col space-y-4">
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                </div>
                <div className="w-1/3 flex flex-col space-y-4">
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                  <CardArticleSmall img={Images.Keyboard} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArticle;
