import { Article } from "../components/Article"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { showArticleFetch } from "../services/axiosArticle";


export const ShowArticle = () => {
  const { id } = useParams();
  const [dataArticle, setDataArticle] = useState([]);


  useEffect(() => {
    showArticleFetch(id, setDataArticle);
  }, [id])
  
  return (
    <div>
      {dataArticle.created_at &&
        <Article 
          id={dataArticle.id}
          title={dataArticle.title}
          content={dataArticle.content}
          isLinkVisible={false}
          created_at={dataArticle.created_at}
        />
      }
    </div>
  )
}
