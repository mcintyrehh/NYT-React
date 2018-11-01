import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "cd28b096fd704b9c816a4d2f39e42b72";

export default {
  searchArticles: function(query) {
    return axios.get(BASEURL, {
      params: {
        'api-key': "cd28b096fd704b9c816a4d2f39e42b72",
        'q': query,
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
