import React from 'react';
import Card from './card';
import Link from 'next/link';

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const defaultTitle = 'Title Missing';
  return (
    <div className='pt-6'>
      {articles.map((article, i) => {
        return !(i % 2) ? (
          <div className='grid grid-cols-2 gap-16 pb-12'>
            <Card
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
            <div className='relative'>
              <h3 className='font-chivo text-4xl text-blue-600 dark:text-slate-50'>
                {article.attributes.hero
                  ? article.attributes.hero.title
                  : defaultTitle}
              </h3>
              <p className='pt-6'>{article.attributes.description}</p>
              <Link
                className='absolute bottom-0'
                href={`/article/${article.attributes.slug}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-12'>
            <div>
              <h3>
                {article.attributes.hero
                  ? article.attributes.hero.title
                  : defaultTitle}
              </h3>
            </div>
            <Card
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
