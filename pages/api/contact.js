import { fetchAPI } from "../../lib/api";

export default function handler(req, res) {
    console.log(req.method);
    if(req.method === 'POST'){
        console.log("Sending mail");
        fetchAPI("/comments/api::writer.writer:3", {}, {
            method: "POST",
            body: JSON.stringify({
                "author": {
                    "id": "1",
                    "name": "JTEST",
                    "email": "jtest@sample.com"
                },
                "content": "Test Comment"
            })
        });
    }
    res.redirect(307, '/contact');
}