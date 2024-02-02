import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import CardContainer from "./Components/CardContainer";

function App() {
  const [news, setNews] = useState([]);
  const [data, setData] = useState({});
  const childToParennt = (returnedItem) => {
    setData(returnedItem);
    console.log(returnedItem);
    console.log("Parent component");
  };
  const fecthNewsFunction = async () => {
    const fetchNews = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-01-02&sortBy=publishedAt&apiKey=0b2df5b34fb642109d9e52c574a6b583"
    );
    setNews(fetchNews.data.articles);
  };

  useEffect(() => {
    fecthNewsFunction();
  }, []);
  return (
    <>
      <Navbar childToParennt={childToParennt} />
      <h1>{data.Name1}</h1>
      <Card news={news} />
    </>
  );
}

export default App;
