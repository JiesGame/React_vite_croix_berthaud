/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Article } from "../../components/Article";
import { adminArticlesFetch } from "../../services/axiosAdmin";

export const AdminArticles = () => {
  const[dataArticles, setDataArticles] = useState([]);
  const[category, setCategory] = useState("news")
  
  useEffect(() => {
    console.log(category)
    adminArticlesFetch(setDataArticles, category);
  },[category])

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  }


  return (
    <div className="text-center">
      <h1>Gestion des articles</h1>
      <Link to='../admin_home'>Retour au tableau administrateur</Link>
      <Link to='../admin_create_article'>Créer un article</Link>
      <select value={category} onChange={handleChange}>
        <option value="news">News</option>
        <option value="maison_de_quartier">Maison de quartier</option>
        <option value="programme">Programme</option>
        <option value="a_l_affiche">A l'affiche</option>
        <option value="activites_enfants">Activités enfants</option>
        <option value="activites_adultes">Activités adultes</option>
      </select>
      <div>
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
    </div>
  )
}
