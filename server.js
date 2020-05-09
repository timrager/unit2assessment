// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todos.js');
const PORT = process.env.port || 3000;
// const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// app.use(methodOverride('_method'));


// mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/unit2assessment';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})


// index route
app.get('/', (req, res) => {
    Todo.find( {}, (err, allTodos) => {
    res.render('Index', { todos: allTodos } )
    });
});

// create route
app.post('/', (req, res) => {
    if (req.body.done === "on") {
        req.body.done = true;
    } else {
        req.body.done = false;
    }
    Todo.create(req.body, (err, createdTodo) => {
        res.redirect('/');
    })
})

  // LISTENER
app.listen(PORT, () => {
    console.log('LIstening on port: ', PORT);
  })
  