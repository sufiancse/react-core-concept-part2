export default function Post({ post }) {
    const {title, body} = post
  return (
    <div className="card">
      <h2 className="textColor">Post Title: <span className="white">{title}</span></h2>
      <p>{body}</p>
    </div>
  );
}
