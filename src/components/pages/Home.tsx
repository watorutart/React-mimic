import { FC, memo } from "react";

const Home: FC = memo(() => {
  console.log("home");
  return (
    <div>
      <p>Home</p>
    </div>
  );
});

export default Home;
