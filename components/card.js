import React from 'react';
import Link from 'next/link';
import Image from './image';

const Card = ({ article, route, className }) => {
  const defaultTitle = 'Title Missing';
  article = article || {};
  article.hero = article?.hero || { image: null };
  return (
    <div className={`${className} p-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 border-collapse border-solid border-2 border-blue-600 dark:border-slate-50 rounded-2xl`}>
      <Link href={`/${route}/${article?.slug}`}>
        <div className='uk-card-media-top'>
          <h3 className='font-chivo text-xl sm:text-2xl md:text-2xl text-blue-600 dark:text-slate-50'>
            {article.hero
              ? article.hero.title
              : defaultTitle}
          </h3>
          <Image
            className='rounded-2xl shadow-lg'
            image={article.hero.image}
          />
        </div>
      </Link>
      <div className='relative'>
        <p className='pt-12'>{article.description}</p>
      </div>
    </div>
  );
};

export default Card;
