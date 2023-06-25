import { fetchAPI } from "../../lib/api";

export default function handler(req, res) {
    if(req.method === 'POST'){
        const {name, email, message} = req.body;
        const content = `${email}\r\n${message}`;
        fetchAPI("/comments/api::writer.writer:3", {}, {
            method: "POST",
            body: JSON.stringify({
                "author": {
                    "id": "1",
                    "name": name,
                    "email": email
                },
                "content": content
            })
        });
    }
    res.redirect(307, '/success');
}