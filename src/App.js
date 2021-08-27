import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const jsonData = await res.json();

      const currentPosts = jsonData.slice(0, 10);
      const posts = await Promise.all(
        currentPosts.map(async (id) => {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
          const jsonData = await res.json();
          return jsonData;
        })
      );
      setData(posts);
      console.log(posts);
    };

    getData();
  }, []);

  return <div className="App"></div>;
}
