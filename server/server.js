    /*
        This is where the sever/API is set up and configured.
        - Express is used to create the routes for the API
        - Mongoose is used to interact with the database using ODM (Object Data Modelinhg)
        - Morgan is used as HTTP request logger for node. 
        - bodyParser is used to extract the entire body portion of an incoming request stream..
            and exposes it on req.body. Parses the text as json.
        - methodOverride is used to simulate DELETE and PUT.
        - cors (Cross Origin Resource Sharing) is used to give servers cross domain access controls which enable secure cross domain data transfers.

    */
     //Reference: https://expressjs.com/en/4x/api.html
     //Reference: http://mongoosejs.com/docs/guide.html
     //Reference: https://www.youtube.com/watch?v=PFP0oXNNveg&t=362s
    //Reference: https://www.joshmorony.com/building-a-review-app-with-ionic-2-mongodb-node/
    //Reference: https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
    //Reference: https://docs.npmjs.com/
    
    //==Module Dependencies============================================================

    var express = require('express'); //Bring in express from the node_modules folder. Creates an Express application. 
    //The express() function is a top level function exported by the express module
    var app = express(); //Initialising app to use express. Responsible for determining how to handle user requests       
    //Mongoose allows us to interact with MongoDB (hence the name mongoose) and access mongodb commands for CRUD (Create Read Update Delete)
    var mongoose = require('mongoose'); //Mongoose is an object modelling package for Node. Works like an ORM (Object Relational Mapping)                    
    var morgan = require('morgan'); // Morgan is a HTTP request logger for Node. 
    var bodyParser = require('body-parser');   //Used whenever you have to parse a text or json body
    var methodOverride = require('method-override'); // Used to simulate DELETE and PUT in places where the client doesnt support it.
    var cors = require('cors'); //Enable cors with various options.
    
    //==================================================================================
    //Connect to mongodb database
    mongoose.connect('mongodb://localhost/myAppDB'); 
    //How to view the reviews in mongodb using commands:
   // http://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections

    //How data is logged and parsed
    app.use(morgan('dev')); //Log every request to the console  
    //BodyParser.urlencoded explained: http://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do                                    
    app.use(bodyParser.urlencoded({'extended':'true'}));  //Only parses urlencoded bodies. If true, POST request gets encoded in form of an object that only contains {key:value} pairs in json format       
    app.use(bodyParser.json()); // Parses the text as JSON and exposes it on req.body                              
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //request content-type to parse using wildcard.. the full mime (Multipurpose Internet Mail Extensions) type will be returned if matched.
    app.use(methodOverride()); //Override the method of a request
   
    app.use(cors()); //Enable all CORS requests
    //Express uses middleware functions which are functions that have access to the request object (req), the response object (res) and the next middleware function in the request-response cycle.
    //How does access-control-Allow-Headers work: http://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); //wildcard used to allow all domains access.
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT'); //Allow to use Delete and Put methods
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //response to a preflight request to indicate which http headers will be available.
        next(); //call next middleware function in the stack otherwise the request will be left hanging
    });

    // Mongoose model used to represent the data in the database
    var gameReview = mongoose.model('gameReview', {
        name: String,
        platform: String,
        review: String,
        rating: Number
    });
    
    //==Routing=============================================================================
     //GET method
    // Uses HTTP GET request to get all reviews using api with functions request and response
     app.get('/api/gameReviews', function(req, res) {
         console.log("Getting reviews");
         //Documents can be retrieved through Model.find..find is a Mongoose model method to find *ALL* reviews in the mongo database
         gameReview.find(function(err, gameReviews) {
             if (err) //If theres an error
             res.send(err) //respond back with the error
            //Responds back with all the gameReviews in json format.
             res.json(gameReviews);
         });
     });
        
        // POST method route 
        //Uses HTTP POST request to post a new created review to database.
    app.post('/api/gameReviews', function(req, res) { //request and response parameters
        //Once the review is posted from Ionic. Mongoose model.create processes the review data into the model and stores it into the database
        gameReview.create({
            name: req.body.name,
            platform: req.body.platform,
            review: req.body.review,
            rating: req.body.rating,
            done: false //finish

     }, function(err, game) {
            if (err) //if theres an error..
            res.send(err); //Send an error response 

            //Try to get all reviews after above is created
            gameReview.find(function(err, games){
                if(err) //if theres an error..
                res.send(err) //Send an error response 
                res.json(games); //Send a JSON response
            });

        });
    });

    // Delete
    //Delete a review by its ID 
    app.delete('/api/gameReviews/:game_id', function(req, res) {
        //model.remove removes review document by its id
        gameReview.remove({
            _id : req.params.game_id
        }, function(err, review) {
 
        });
    });

    //node server.js to run server (listen for a connection at port 8080)
    app.listen(8080);
    console.log("listening on port 8080");