import React from 'react';
import Card from './card';
import Link from 'next/link';
import Button from './button';

const Articles = ({ articles, route }) => {
  const defaultTitle = 'Title Missing';
  return (
    <div className='pt-6'>
      {articles.map((article, i) => {
        return !(i % 2) ? (
          <div key={article.id} className='grid grid-cols-2 gap-16 pb-12'>
            <Card
              route={route}
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
                href={`/${route}/${article.attributes.slug}`}
              >
                <Button onclick={() => {}}>Read More</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div key={article.id} className='grid grid-cols-2 gap-16 pb-12'>
            <div className='relative'>
              <h3 className='font-chivo text-4xl text-blue-600 dark:text-slate-50'>
                {article.attributes.hero
                  ? article.attributes.hero.title
                  : defaultTitle}
              </h3>
              <p className='pt-6'>{article.attributes.description}</p>
              <Link
                className='absolute bottom-0'
                href={`/${route}/${article.attributes.slug}`}
              >
                <Button onclick={() => {}}>Read More</Button>
              </Link>
            </div>
            <Card
              route={route}
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
