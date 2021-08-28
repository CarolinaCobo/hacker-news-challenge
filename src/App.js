import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const jsonData = await res.json();

      const pageSize = 10;
      const endOfPageNum = currentPage * pageSize;
      const currentPosts = jsonData.slice(
        endOfPageNum - pageSize,
        endOfPageNum
      );

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

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return <div className="App"></div>;
}
