import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="sm:ml-64 bg-slate-50 dark:bg-blue-600 h-screen font-chivo pl-16">
        <h1 className="text-blue-600 dark:text-slate-50 text-8xl pt-32 pb-2 font-bold" dangerouslySetInnerHTML={{ __html: homepage.attributes.hero.title }}></h1>
        <subtitle>{homepage.attributes.subtitle}</subtitle>
        <Articles articles={articles} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category", "hero.title", "hero.image"]}),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;