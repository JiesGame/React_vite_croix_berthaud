import { useState, useEffect } from "react";
import { articlesFetch } from "../services/axiosAdmin";
import { Article } from "./Article";

export const ListArticles = () => {
  const [dataArticles, setDataArticles] = useState([]);


  useEffect(() => {
    articlesFetch(setDataArticles);
  }, [])

  return (
    <div className="font-semibold">
      <h1 className="text-center">Dernières actualités</h1>
      {dataArticles.map((article) => (
        <Article
        key={article.id}
        id={article.id}
        title={article.title}
        content={article.content}
        isLinkVisible={true}
      />    
      ))}
    </div>
  )
}