import styles from "../../styles/Feed.module.css";
import {useRouter} from 'next/router'
import {NavBar} from '../../components/navBar'

const Feed = ({ pageNumber, articles }) => {
    const router = useRouter()
  return (
    <div className='page-container'>
        <NavBar />
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {" "}
              {article.title}{" "}
            </h1>
            <p> {article.description} </p>
            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
          <div onClick={ ()=>{
              if(pageNumber > 1){
                  router.push(`/feed/${pageNumber - 1}`)
              }
          }
          }
          className={pageNumber === 1 ? styles.disabled : styles.active}>
              Previous Page
          </div>
          <div>#{pageNumber}</div>
          <div onClick={ ()=>{
              if(pageNumber < 5){
                  router.push(`/feed/${pageNumber + 1}`)
              }
          }
          }
          className={pageNumber === 5 ? styles.disabled : styles.active}>
              Next Page
          </div>

      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 0 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const jsonApi = await apiResponse.json();

  //console.log(jsonApi)
  const { articles } = jsonApi;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
