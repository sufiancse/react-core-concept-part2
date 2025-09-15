export default function User({ user }) {
    const{name, email,address} = user
    const {city, zipcode} = address
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>
    </div>
  );
}
