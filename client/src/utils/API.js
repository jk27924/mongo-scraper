import axios from "axios";

export default {
    getArticles: function () {
        return axios.get("/all");
    },
    getSavedArticles: function () {
        return axios.get("/savedArticle");
    }
};

