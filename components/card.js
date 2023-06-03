import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article }) => {
  article.attributes.hero = article.attributes.hero || { image: null };
  return (
    <Link href={`/article/${article.attributes.slug}`}>
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image className="rounded-2xl" image={article.attributes.hero.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div>
    </Link>
  );
};

export default Card;