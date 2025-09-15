import "./App.css";
import Button from "./Counter";
import Bowler from "./Bowler";
import Users from "./Users";
import { Suspense } from "react";
import Posts from "./Posts";
import Comments from "./Comments";

// 37-5+6 module class
// const usersFetch = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

// 37-6 module class
// const postsFetches = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };



function App() {
  // 37-2 module class
  // {
  //   const handleClick = () => {
  //   alert("Button Clicked");
  // };
  // const handleClick2 = (num) => {
  //   const square = num * num;
  //   alert(`Square value is: ${square}`)
  // };
  // }

  // 37-6 module class
  // const postsPromise = postsFetches();

  return (
    <>
      <h1>Vite + React</h1>

      <Comments></Comments>

      {/* 37-6 module class
      <Suspense fallback={<h2>Loading, be patient</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* 37-5+6 module class
      <Suspense fallback={<h3>Data still loading....</h3>}>
        <Users usersFetch={usersFetch}></Users>
      </Suspense> */}

      {/* 37-2 module class
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2(10)}>Square</button> */}

      {/* 37-3 module class
      <Button></Button> */}

      {/* 37-4 module class
      <Bowler></Bowler> */}
    </>
  );
}

export default App;
