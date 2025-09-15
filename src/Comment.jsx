export default function Comment({ comment }) {
  const { name, email, body } = comment;
  return (
    <div className="card">
      <h3 className="textColor">Name: {name}</h3>
      <h4>Email: {email}</h4>
      <p className="white">{body}</p>
    </div>
  );
}
