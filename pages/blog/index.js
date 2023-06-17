import { fetchAPI } from "../../lib/api";
import Articles from "../../components/articles";
import Layout from "../../components/layout";

export default function index({ posts, categories }) {
    return (
        <Layout categories={categories}>
            <div className="pl-16 h-full ml-64 bg-slate-50 dark:bg-blue-600">
                <Articles route="blog" articles={posts} />
            </div>
        </Layout>
    );
}


export async function getStaticProps(ctx){
    const postsRes = await fetchAPI("/posts", { populate: ["category", "hero.title", "hero.image"]});
    const categoriesRes = await fetchAPI("/categories", { populate: "*" });

    return {
        props:{
            posts: postsRes.data,
            categories: categoriesRes.data
        }
    }
}
