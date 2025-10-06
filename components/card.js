import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article, route, className }) => {
  const defaultTitle = "Title Missing";
  const cardMediaDimensions = { width: 450, height: 450 };
  article = article || {};
  article.hero = article?.hero || { image: null };

  const image = {
    ...(article?.seo?.shareImage || article.hero.image),
    ...cardMediaDimensions,
  };

  return (
    <div
      className={`${className || ""} border-collapse border-solid border-2 border-blue-600 dark:border-slate-50 rounded-2xl`}
    >
      <Link
        className="uk-padding-remove uk-display-inline-block uk-width-large uk-width-2-5@l uk-text-top"
        href={`/${route}/${article?.slug}`}
      >
        <div className="uk-card-media-top md:uk-card-media-left">
          <Image
            className="uk-width-large uk-width-medium@l rounded-2xl shadow-lg uk-margin-auto uk-margin-remove-left@m uk-margin-remove-right@m"
            image={image}
          />
        </div>
      </Link>
      <div className="uk-width-1-1 uk-width-3-5@l uk-display-inline-block">
        <div className="uk-card-body uk-text-middle p-4">
          <h3 className="font-chivo text-xl sm:text-2xl md:text-2xl text-blue-600 dark:text-slate-50">
            {article.hero ? article.hero.title : defaultTitle}
          </h3>
          <p className="pt-12">{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
