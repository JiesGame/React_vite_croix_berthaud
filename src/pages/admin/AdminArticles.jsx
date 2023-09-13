import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { articlesFetch } from "../../services/axiosAdmin";
import { Article } from "../../components/Article";

export const AdminArticles = () => {
  const[dataArticles, setDataArticles] = useState([])
  useEffect(() => {
    articlesFetch(setDataArticles);
  },[])

  return (
    <div className="text-center">
      <h1>Gestion des articles</h1>
      <Link to='../admin_home'>Retour au tableau administrateur</Link>
      <Link to='../admin_create_article'>Créer un article</Link>
      <div>
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
    </div>
  )
}
