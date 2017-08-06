var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var connection = require('./public/config/connection')

console.log(connection)


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

});





app.get('/', function (req, res) {
    
      res.sendFile('index.html');
})

app.get('/accountList',function (req, res) {

    console.log("I received a get request.");

    //Dummie Data
    // person1 = {
    //     name:"Tim",
    //     email:"tim@email.com",
    //     number :"111-111-1111"
    // };
    //
    // person2={
    //     name:'emely',
    //     email:'emely@email.com',
    //     number:'222-222-2222'
    // };
    //
    // person3={
    //     name:'John',
    //     email:'John@email.com',
    //     number:'333-333-3333'
    // };

//    db.contactlist.find(function (err,docs) {
//
//        console.log(docs);
//
//        res.json(docs);
//    });
  
  connection.query('SELECT * FROM LINKEDIN_ACCOUNTS', function (error, results, fields) {
  if (error) throw error;
  // connected! 
  
  var formattedData = JSON.stringify(results)
   
//  console.log(results[0].ACCOUNT_FIRST_NAME)
  console.log(results)
   res.json(results);
});

    // var contactList = [person1,person2,person3];
    //
    // res.json(contactList);

});



var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('IM LISTENING IS PORT ' + PORT);

})