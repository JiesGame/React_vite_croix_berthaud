/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Article } from "../../components/Article";
import { AdminPanel } from "../../components/admin/AdminPanel";
import { articlesCategoryFetch } from "../../services/axiosArticle";

export const AdminArticles = () => {
  const[dataArticles, setDataArticles] = useState([]);
  const[category, setCategory] = useState("news")
  
  useEffect(() => {
    console.log(category)
    articlesCategoryFetch(setDataArticles, category);
  },[category])

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  }

  return (
    <>
      <AdminPanel />
      <article className="text-center space-y-2">
        <h1 className="text-4xl primary my-5">Gestion des articles</h1>
        <div className="flex justify-center flex-col items-center">
          <Link to='../admin_create_article' className="w-[150px] primary-bg text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-cyan-300 button">Créer un article</Link>
          <div className="flex items-center">
            <p className="mt-5 ">Catégorie : </p>
          <select value={category} onChange={handleChange} className="border ml-1 px-1 mt-5 primary cursor-pointer">
            <option value="news">News</option>
            <option value="maison_de_quartier">Maison de quartier</option>
            <option value="programme">Programme</option>
            <option value="a_l_affiche">A l'affiche</option>
            <option value="activites_enfants">Activités enfants</option>
            <option value="activites_adultes">Activités adultes</option>
          </select>
          </div>
        </div>
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
      </article>
    </>
  )
}
