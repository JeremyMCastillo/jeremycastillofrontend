import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import { useContext } from "react";

const Post = ({ post, categories }) => {
  const { defaultSeo } = useContext(GlobalContext);
  const hero = post
    ? post.hero
    : { title: defaultSeo.title, image: defaultSeo.shareImage };
  const imageUrl = getStrapiMedia(hero?.image || defaultSeo.shareImage);

  const banner = function () {
    if (imageUrl) {
      return (
        <div
          id="banner"
          className="h-[400px] md:h-[600px] uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding m-0 pl-16 md:pl-80"
          data-src={imageUrl}
          data-srcset={imageUrl}
          data-uk-img
        >
          <h1>{post.title}</h1>
        </div>
      );
    }
    return;
  };

  const seo = {
    metaTitle: hero.title,
    metaDescription: post.description,
    shareImage: hero.image,
    post: true,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      {banner()}
      <div className="post uk-section h-full pl-12 pr-12 md:pl-80 bg-slate-50 dark:bg-blue-600">
        <div className="uk-container uk-container-small">
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {post.writer.picture && (
                <img
                  src={getStrapiMedia(post.writer.data.picture)}
                  alt={post.writer.data.picture.data.alternativeText}
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">By {post.writer.name}</p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{post.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await fetchAPI("/posts", { fields: ["slug"] });

  return {
    paths: posts.data.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postsRes = await fetchAPI("/posts", {
    filters: {
      slug: params.slug,
    },
    populate: ["hero", "hero.image", "writer"],
  });
  const categoriesRes = await fetchAPI("/categories");
  const globalRes = await fetchAPI("/global");

  return {
    props: {
      post: postsRes.data[0],
      categories: categoriesRes,
      globalData: globalRes.data,
    },
  };
}

export default Post;
