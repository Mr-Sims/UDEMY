import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost(props) {
 

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows="3"
            placeholder="Tell us what you`re thinking of"
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
            placeholder="Your name"
          />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="/">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData()
  const postData = {
    body: formData.get('body'),
    author: formData.get('author')
  }

  // const postData = Object.fromEntries(formData)

  const response = await fetch("http://localhost:8080/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect('/');

}
