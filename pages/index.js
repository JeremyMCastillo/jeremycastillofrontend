import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage?.seo || ""} />
      <div className="md:pl-80 bg-slate-50 dark:bg-blue-600 h-full font-chivo pl-8">
        <h1 className="text-blue-600 dark:text-slate-50 text-7xl sm:text-8xl py-28 pb-2 font-bold" dangerouslySetInnerHTML={{ __html: homepage?.hero.title || "" }}></h1> 
        <subtitle className="mb-48 block pl-2 pr-2 pt-4">{homepage?.subtitle || ""}</subtitle>
        <h2 className="text-blue-600 dark:text-slate-50 text-6xl font-bold font-chivo">My Work</h2>
        <Articles route="projects" articles={articles} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, globalRes] = await Promise.all([
    fetchAPI("/articles", { populate: []}),
    fetchAPI("/categories"),
    fetchAPI("/homepage", {
      populate: ["hero", "hero.image", "seo"],
    }),
    fetchAPI("/global"),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      globalData: globalRes.data,
    },
  };
}

export default Home;
