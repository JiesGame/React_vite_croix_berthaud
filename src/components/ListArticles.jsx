import { useState, useEffect } from "react";
import { articlesFetch } from "../services/axiosArticle";
import { Article } from "./Article";

export const ListArticles = () => {
  const [dataArticles, setDataArticles] = useState([]);

  useEffect(() => {
    articlesFetch(setDataArticles);
  }, [])

  return (
    <div className="font-semibold">
      <h1 className="text-center font-bold text-5xl my-16 primary">Dernières actualités</h1>
      {dataArticles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          isLinkVisible={true}
          created_at={article.created_at}
        />   
      ))}
    </div>
  )
}