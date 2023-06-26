import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";

const Post = ({post, categories}) => {
    const { defaultSeo } = useContext(GlobalContext);
    const hero = post.attributes ? post.attributes.hero : { title: defaultSeo.title, image: defaultSeo.shareImage };
    const imageUrl = getStrapiMedia(hero.image);
  
    const seo = {
      metaTitle: hero.title,
      metaDescription: post.attributes.description,
      shareImage: hero.image,
      post: true,
    };
  
    return (
      <Layout categories={categories.data}>
        <Seo seo={seo} />
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding m-0 ml-64"
          data-src={imageUrl}
          data-srcset={imageUrl}
          data-uk-img
        >
          <h1>{post.attributes.title}</h1>
        </div>
        <div className="post uk-section h-full ml-64 bg-slate-50 dark:bg-blue-600">
          <div className="uk-container uk-container-small">
            <ReactMarkdown>
              {post.attributes.content}
            </ReactMarkdown>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {post.attributes.writer.data.attributes.picture && (
                  <img
                    src={getStrapiMedia(
                      post.attributes.writer.data.attributes.picture
                    )}
                    alt={
                      post.attributes.writer.data.attributes.picture.data
                        .attributes.alternativeText
                    }
                    style={{
                      position: "static",
                      borderRadius: "20%",
                      height: 60,
                    }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {post.attributes.writer.data.attributes.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">
                    {post.attributes.published_at}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
};

export async function getStaticPaths() {
    const posts = await fetchAPI("/posts", { fields: ["slug"]});

    return {
        paths: posts.data.map((post) => ({
            params: {
                slug: post.attributes.slug
            }
        })),
        fallback:false
    }
}
export async function getStaticProps({ params }){
    const postsRes = await fetchAPI("/posts", {
        filters: {
            slug: params.slug
        },
        populate: ["hero.title", "hero.image", "category", "writer.picture"]
    });
    const categoriesRes = await fetchAPI("/categories");

    return {
        props:{
            post: postsRes.data[0], categories: categoriesRes
        },
        revalidate: 1
    };
}

export default Post;
