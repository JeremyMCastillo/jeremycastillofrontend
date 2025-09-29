import Button from "../components/button";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const handleSubmit = (e) => {
  "use server";
  e.preventDefault();
  console.log("Sending mail");
  fetchAPI(
    "/comment-manager/comments/contact",
    {},
    {
      method: "POST",
      body: JSON.stringify({
        content: "Test Comment",
      }),
    },
  );
};

export default function contact(req, res) {
  return (
    <Layout>
      <div className="h-full pl-16 md:pl-80 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-24">
        <div className="text-2xl font-chivo text-blue-600 dark:text-slate-50 font-bold mr-8">
          Have a question?
          <br />
          <br />
          Or just want to chat?
          <br />
          <br />
          Send me a message and I'll be happy to get back to you as soon as I'm
          able.
        </div>
        <form
          className="flex flex-col gap-8 bg-slate-50 dark:bg-blue-600 border border-blue-600 dark:border-slate-50 rounded-lg p-8 mr-16 shadow-lg"
          action="/api/contact"
          method="POST"
        >
          <div className="flex flex-col w-1/2">
            <label>Your Name</label>
            <input name="name" type="text" />
          </div>
          <div className="flex flex-col w-3/4">
            <label>Email</label>
            <input name="email" type="text" />
          </div>
          <div className="flex flex-col w-3/4">
            <label>Message</label>
            <textarea name="message" className="h-24"></textarea>
          </div>
          <div className="w-4">
            <Button type="submit" onClick={(e) => {}}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalRes = await fetchAPI("/global");

  return {
    props: {
      globalData: globalRes.data,
    },
  };
}

