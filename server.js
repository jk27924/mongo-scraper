// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Requiring all models
var db = require("./models");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "manutd";
var collections = ["scraped"];

// If deployed, use the deployed database || Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/manutd";

    mongoose.connect(MONGODB_URI);

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Route 1
// =======
// This route will retrieve all of the data from the scrapedData collection as a json (this will be populated by the data you scrape using the next route)

app.get("/all", function(req, res) {
    // Query: In our database, go to the animals collection, then "find" everything
    db.Article.find({}, function(error, found) {
      // Log any errors if the server encounters one
      if (error) {
        console.log(error);
      }
      // Otherwise, send the result of this query to the browser
      else {
        res.json(found);
      }
    });
});

// Route 2
// =======
// Scrape route

app.get("/scrape", function(req, res) {

    axios.get("https://www.manutd.com/").then(function(response) {
  
    var $ = cheerio.load(response.data);
    var results = [];
  
      $(".item").each(function(i, element) {
  
        var title = $(element).children().children().find(".mu-item__info").find('a').children().text();
        var link = $(element).find("a").attr("href");

        if (link === "javascript:void(0)") {
            return
        }

        if (link[0] === "/") {
            link = "https://www.manutd.com" + link
        }

        // console.log(title);
  
        var data = {
          title: title,
          link: link,
          isSaved: false
        }
  
        db.Article.insert(data);
        
        results.push(data);
      });
  
      res.send(results);
    
    })
})


// Route 3
// =======
// Filtering route

app.get("/savedArticle", function(req, res) {
    db.Article.find ( { isSaved: true },
        function(error, found) {
            if (error) {
                res.send(error);
            } else {
                res.send(found);
            }
        } )
})

// Route 4
// =======
// it updates between False and True

// app.post("/setSaved", function(req, red) {
//     db.Article.update ( 
//         { _id: req.body },
//         { $set: {}} 

//      })
// })

// Listen on port 3001
app.listen(3001, function() {
    console.log("App running on port 3001!");
});