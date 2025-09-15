import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Add</button>
    </>
  );
}
