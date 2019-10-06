import React from "react";
import "./ArticleBody.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const articleBody = props => (
    <div>
        {props.articles.filter(article => article.title).map(article => (
            <ArticleCard
                title = { article.title }
                link = { article.link }
            />
        ))}
    </div>
);

export default articleBody;