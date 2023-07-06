import React from "react";

function Home() {
  return (
    <div>
      <h1 className="text-6xl" mb-4>
        Welcome
      </h1>
      {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  );
}

export default Home;
