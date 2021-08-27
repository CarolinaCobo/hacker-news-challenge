import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const jsonData = await res.json();
      console.log(jsonData);
      return jsonData;
    };

    getData();
  }, []);

  return <div className="App"></div>;
}
