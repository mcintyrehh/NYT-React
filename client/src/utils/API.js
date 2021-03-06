import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "cd28b096fd704b9c816a4d2f39e42b72";

export default {
  searchArticles: function(searchObj) {
    return axios.get(BASEURL, {
      params: {
        'api-key': APIKEY,
        'q': searchObj.search,
        'begin_date': searchObj.startDate,
        'end_date': searchObj.endDate,
      }
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
    // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  getFavs: function() {
    return axios.get("/api/articles")
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};

// export default {
  
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
