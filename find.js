var mongoose = require('mongoose');
 
var Author = require('./author');
var Book = require('./book');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
     
    Book.find({
        title: /mvc/i
    }).sort('-created')
    .limit(5)
    .exec(function(err, books) {
        if (err) throw err;
         
        console.log(books);
    });
     
    Author.findById('59b31406beefa1082819e72f', function(err, author) {
        if (err) throw err;
         
        author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';
         
        author.save(function(err) {
            if (err) throw err;
             
            console.log('Author updated successfully');
        });
    });
     
    Author.findByIdAndUpdate('59b31406beefa1082819e72f', { linkedin: 'https://www.linkedin.com/in/jamie-munro-8064ba1a/' }, {new:true}, function(err, author) {
        if (err) throw err;
         
        console.log(author);
    });
});