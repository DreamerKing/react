import { Fragment } from 'react';

type Blog = {
  id: number,
  title: string,
  body: string
}
const posts: Blog[] = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
  return posts.map(post =>
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  );
}

function PostTitle({ title }: { title: string}) {
  return <h1>{title}</h1>
}

function PostBody({ body }: { body: string}) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
