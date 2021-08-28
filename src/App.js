import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch API to get all the ID numbers of the top stories
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

      //   Fetch data from API with all the details using the ID
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
      setLoading(false);
    };

    getData();
  }, [currentPage]);

  //   Pagination
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      {loading ? <div>Loading</div> : null}
      {loading === false
        ? data.map((post) => <div key={post.id}>{post.title}</div>)
        : null}

      <div>
        <div>Page {currentPage} </div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
