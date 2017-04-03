	//==Module Dependencies============================================================

    var express = require('express'); //Bring in express from the node_modules folder. Creates an Express application. 
    //The express() function is a top level function exported by the express module
    var app = express(); //Initialising app to use express. Responsible for determining how to handle user requests       
    //Mongoose allows us to interact with MongoDB (hence the name mongoose) and access mongodb commands for CRUD (Create Read Update Delete)
    var mongoose = require('mongoose'); //Mongoose is an object modelling package for Node. Works like an ORM (Object Relational Mapping)                    
    var morgan = require('morgan'); // Morgan is a HTTP request logger for Node. 
    var bodyParser = require('body-parser');   //Used whenever you have to parse a text or json body
    var methodOverride = require('method-override'); // Used to simulate DELETE and PUT in places where the client doesnt support it.
    var cors = require('cors');
    //==================================================================================
    //Connect to mongodb database
    mongoose.connect('mongodb://localhost/myAppDB'); 

    //How data is logged and parsed
    app.use(morgan('dev')); //Log every request to the console  
    //BodyParser.urlencoded explained: http://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do                                    
    app.use(bodyParser.urlencoded({'extended':'true'}));  //Only parses urlencoded bodies. If true, POST request gets encoded in form of an object that only contains {key:value} pairs in json format       
    app.use(bodyParser.json()); // Parses the text as JSON and exposes it on req.body                              
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());
    app.use(cors());

    // Mongoose model
    var gameReview = mongoose.model('gameReview', {
        name: String,
        platform: String,
        review: String,
        rating: Number
    });
    /*
    //==Routing=============================================================================
        // POST method route 
    app.post('/api/games', function(req, res) { //request and response parameters
        
        gameReview.create({
            name: req.body.name,
            platform: req.body.platform,
            review: req.body.review,
            rating: req.body.rating,
            done: false 

     }, function(err, game) {
            if (err) //if theres an error..
            res.send(err); //Send an error response 

            //Try to get all reviews after above is created
            gameReview.find(function(err, games){
                if(err)
                res.send(err)
                res.json(games); //Send a JSON response
            });

        });
    });
*/
    //node server.js to run server (listen for a connection)
    app.listen(8080);
    console.log("listening on port 8080");