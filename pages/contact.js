import Button from "../components/button";
import Layout from "../components/layout";

const handleSubmit = (e) => {
    'use server'
    e.preventDefault();
    console.log("Sending mail");
    fetchAPI("/comment-manager/comments/contact", {}, {
        method: "POST",
        body: JSON.stringify({
            content: "Test Comment"
        })
    });
}

export default function contact(req, res) {
    

    return (
        <Layout>
            <form action="/api/contact" method="POST">
                <div className="h-full p-40 flex flex-col ml-64 gap-8 bg-slate-50 dark:bg-blue-600">
                    <div className="flex flex-col">
                        <label>Your Name</label>
                        <input type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                    <div className="w-4">
                        <Button type="submit" onClick={(e) => {}}>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}