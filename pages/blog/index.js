import { fetchAPI } from "../../lib/api";
import Articles from "../../components/articles";
import Layout from "../../components/layout";

export default function index({ posts, categories }) {
  return (
    <Layout categories={categories}>
      <div className="pl-16 md:pl-80 h-full bg-slate-50 dark:bg-blue-600">
        <Articles route="blog" articles={posts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsRes = await fetchAPI("/posts", {
    populate: ["hero", "hero.image", "seo", "seo.shareImage"],
    sort: "publishedAt:desc",
  });
  const categoriesRes = await fetchAPI("/categories");
  const globalRes = await fetchAPI("/global");

  return {
    props: {
      posts: postsRes.data,
      categories: categoriesRes.data,
      globalData: globalRes.data,
    },
  };
}
