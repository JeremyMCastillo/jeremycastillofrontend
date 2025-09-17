import React from 'react';
import Card from './card';
import Link from 'next/link';
import Button from './button';

const Articles = ({ articles, route }) => {
  return articles.length > 0 ? (
    <div className='pt-6'>
      <div className='pb-6'>
          <Card
            className="w-11/12"
            route={route}
            article={articles[0]}
            key={`article__left__${articles[0]?.slug || ''}`}
          />
        </div>
        <div className='pb-12 w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {articles.slice(1).map((article, i) => {
            return (
                <Card
                  route={route}
                  article={article}
                  key={`article__left__${article?.slug || ''}`}
                />)
          })}
        </div>
    </div>
  ) : null;
};

export default Articles;
