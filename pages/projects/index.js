import { fetchAPI } from "../../lib/api";
import Articles from "../../components/articles";
import Layout from "../../components/layout";

export default function index({ articles, categories }) {
    return (
        <Layout categories={categories}>
            <div className="pl-16 h-full md:pl-80 bg-slate-50 dark:bg-blue-600">
                <Articles route="projects" articles={articles} />
            </div>
        </Layout>
    );
}


export async function getStaticProps(ctx){
    const articlesRes = await fetchAPI("/articles", { populate: ["hero", "hero.image"]});
    const categoriesRes = await fetchAPI("/categories");

    const globalRes = await fetchAPI("/global");

    return {
        props:{
            articles: articlesRes.data,
            categories: categoriesRes.data,
            globalData: globalRes.data,
        }
    }
}
