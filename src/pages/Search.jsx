import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Search = () => {
  const isSearch = Cookies.get('search') ? JSON.parse(Cookies.get('search')) : [];

  return (
    <article className='mx-[17%]'>
      <div className="border-2 rounded-lg shadow-lg w-full h-fit my-10">
        <div>
          <div className="primary-bg rounded-t py-3 text-center">
            <h1 className="text-white text-3xl">Résultat de votre recherche</h1>
          </div>
        </div>
        <hr className="light-gray-border border-[1px] mx-[3%]"/>
        <div className='my-3'>
          {
            Cookies.get('search') && isSearch.length > 0 ? (
              isSearch.map((article) => (
                <Link
                  to={`/article/${article.id}`}
                  key={article.id}
                  className={`whitespace-pre-line cursor-pointer pb-4 px-[1%] hover:underline dark card_link block text-center`}
                >
                  ● {article.title}
                </Link>
              ))
            ) : (
             <p className="dark text-center">Aucun article ne correspond à votre recherche.</p> 
            )
          }
        </div>
        <div className="flex justify-between primary-bg text-white rounded-b py-3" />
      </div>
    </article>
  )
}
