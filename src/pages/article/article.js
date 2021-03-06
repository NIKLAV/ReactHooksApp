import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage";
import TagList from "../../components/tagList";
import Loading from "../../components/loading";

const Article = (props) => {
  const slug = props.match.params.slug;
  console.log("slug", slug);
  const apiUrl = `/articles/${slug}`;
  const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl);
  console.log(response);
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="article-page">
      <div className="banner">
        {!isLoading && response && (
          <div className="container">
            <h1>{response.article.title}</h1>
            <div className="article-meta">
              <Link to={`/profile/${response.article.author.username}`}>
                <img src={response.article.author.image} alt="" />
              </Link>
              <div className="info">
                <Link to={`/profile/${response.article.author.username}`}>
                  {response.article.author.username}
                </Link>
                <span className="date">{response.article.createdAt}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {isLoading && <Loading />}
        {error && <ErrorMessage />}
        {!isLoading && response && (
          <div className="row article-content">
            <div className="col-sx-12">
              <div>
                <p>{response.article.body}</p>
                <TagList tags={response.article.tagList} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
