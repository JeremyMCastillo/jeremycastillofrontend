import Card from "./card";

const Articles = ({ articles, route }) => {
  return articles && articles.length > 0 ? (
    <div className="pt-6">
      <div className="pb-6 uk-padding-small uk-padding-remove-top uk-padding-remove-left">
        <Card
          className="uk-width-large uk-width-1-1@l"
          route={route}
          article={articles[0]}
          key={`article__left__${articles[0]?.slug || ""}`}
        />
      </div>
      <div className="pb-12 uk-padding-small uk-padding-remove-top uk-padding-remove-left uk-width-large uk-width-1-1@l grid grid-cols-1 2xl:grid-cols-2 gap-6">
        {articles.slice(1).map((article, i) => {
          return (
            <Card
              route={route}
              article={article}
              key={`article__left__${article?.slug || ""}`}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Articles;
