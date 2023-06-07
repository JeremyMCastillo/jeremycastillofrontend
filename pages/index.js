import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="sm:pl-80 bg-slate-50 dark:bg-blue-600 h-full font-chivo pl-16">
        <h1 className="text-blue-600 dark:text-slate-50 text-8xl py-28 pb-2 font-bold" dangerouslySetInnerHTML={{ __html: homepage.attributes.hero.title }}></h1>
        <subtitle className="mb-48 block pl-2 pt-4">{homepage.attributes.subtitle}</subtitle>
        <h2 className="text-blue-600 dark:text-slate-50 text-6xl font-bold font-chivo">My Work</h2>
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