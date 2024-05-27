import React from "react";

// Warui create imports
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

import blogData from "../data/blog";

console.log(blogData);


function App() {
  return (
    <div className="App">
      {/* add the components */}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />

    </div>

  
  );
}

export default App;



