import React from 'react';
import Link from 'next/link';
import Image from './image';

const Card = ({ article, route }) => {
  article.attributes.hero = article.attributes.hero || { image: null };
  return (
    <Link href={`/${route}/${article.attributes.slug}`}>
      <div className='uk-card uk-card-muted'>
        <div className='uk-card-media-top'>
          <Image
            className='rounded-2xl'
            image={article.attributes.hero.image}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
