import React, { useEffect } from "react";
import blogPosts from "./blogPosts";
import TileGrid from "./TileGrid";

const items = blogPosts.map((p) => ({
  key: p.title,
  to: `/blog/${p.title}`,
  image: p.imgSrc,
  title: p.title,
  meta: p.kind,
}));

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news">
      <h1 className="page-title">News</h1>
      <TileGrid items={items} />
    </div>
  );
}

export default Home;
