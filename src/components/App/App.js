import { useState, useEffect } from "react";
import "./App.css";
import Button from "../Button/Button";
import WidthContainer from "../WidthContainer/WidthContainer";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("topstories");
  const [resultsCount, setResultsCount] = useState(0);

  // Fetch API to get all the ID numbers of the top stories
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/${filter}.json?print=pretty`
      );
      const jsonData = await res.json();

      setResultsCount(jsonData.length);

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
  }, [currentPage, filter]);

  //   Pagination
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  //   Filtering by Top, New and Best stories
  const handleFilterChange = (filterName) => {
    setFilter(filterName);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <div className="App__navbar">
        <WidthContainer>
          <h1>Hacker News</h1>
        </WidthContainer>
      </div>
      <div className="App__navbar-secondary">
        <WidthContainer>
          <div className="App__filter-buttons">
            <Button
              active={filter === "topstories" ? true : false}
              onClick={() => handleFilterChange("topstories")}
            >
              Top Stories
            </Button>
            <Button
              active={filter === "newstories" ? true : false}
              onClick={() => handleFilterChange("newstories")}
            >
              New Stories
            </Button>
            <Button
              active={filter === "beststories" ? true : false}
              onClick={() => handleFilterChange("beststories")}
            >
              Best Stories
            </Button>
          </div>
        </WidthContainer>
      </div>
      <WidthContainer>
        {loading ? <div>Loading</div> : null}
        {loading === false
          ? data.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
      </WidthContainer>
      <WidthContainer>
        <div>
          Page {currentPage} of {Math.ceil(resultsCount / 10)}{" "}
        </div>
        <Button
          active
          large
          disabled={currentPage === 1 ? true : false}
          onClick={handlePrev}
        >
          Previous
        </Button>

        <Button large active onClick={handleNext}>
          Next
        </Button>
      </WidthContainer>
    </div>
  );
}

export default App;
