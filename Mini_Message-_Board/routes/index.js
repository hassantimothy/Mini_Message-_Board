const express = require('express');
const router = express.Router();

//sample message array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//GET route for the new message form
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message Form' });
});

router.post('/new', function (req, res, next) {
  // Access form data using req.body
  const messageUser = req.body.author;
  const messageText = req.body.message;

  //Add the new message to the messages array
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  //Redirect to the home page after adding the message
  res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
