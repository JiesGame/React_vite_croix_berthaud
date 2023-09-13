import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Article } from "../../components/Article";
import { adminArticlesFetch } from "../../services/axiosAdmin";

export const AdminArticles = () => {
  const[dataArticles, setDataArticles] = useState([]);
  const[category, setCategory] = useState("news")
  
  useEffect(() => {
    adminArticlesFetch(setDataArticles, category);
  },[category])

  return (

    <div className="text-center">
      <h1>Gestion des articles</h1>
      <Link to='../admin_home'>Retour au tableau administrateur</Link>
      <Link to='../admin_create_article'>Créer un article</Link>
      <select onChange={(e) => handleChange(e)}>
        <option value="0">S</option>
        <option value="1">M</option>
        <option value="2">L</option>
        <option value="3">XL</option>
        <option value="4">XL</option>
        <option value="5">XL</option>
      </select>
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
