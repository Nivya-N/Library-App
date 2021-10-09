const express = require('express');
const app = new express();
const port = process.env.PORT ||5000;
//const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}));
//app.set('views', './views');
 const booksRouter = express.Router();
 app.use('/books',booksRouter);
 const authRouter = express.Router();
 app.use('/authors',authRouter);


app.get('/', function(req,res){
    res.render(__dirname+"/src/views/index.ejs");
   // res.redirect('/books');
});

app.post('/', function(req,res){
    console.log(req.body.user1,req.body.pwd);
    if(req.body.user1==="admin" && req.body.pwd==="12345")
    {
        req.session.user = req.body.user1;
        res.redirect('/books');
    }
    else{
        res.end("Invalid credentials");
    }
})


// app.get('/style.css', function(req, res) {
//     res.sendFile(__dirname + "/style.css");
//   });
  app.get('/signup', function(req,res){
    res.sendFile(__dirname+"/src/views/signup.html");
});

// app.post('/books',function(req,res){
//     res.sendFile(__dirname+"/src/views/books.ejs")
// })
var books = [
    {
        title:"Tom and Jerry",
        author:"Joseph Barbera",
        genre:'Cartoon',
        img: '/public/images/tom.jpg'
    },

    {
        title:"Harry Potter",
        author:"J.K. Rowling",
        genre:'Fantasy',
        img: '/public/images/harry.jpg'
    },
    {
        title:"Paathummayude Aadu",
        author:"Vaikkom Muhammaed Basheer",
        genre:'Fantasy',
        img: '/public/images/paathumma.jpg'
    }
];
var authors = [
    {
        name:"Joseph Barbera",
        img:"/public/images/joseph.jpg"
    },
    {
        name:"J.K.Rowling",
        img:"/public/images/rowling.jpg"
    },
    {
        name:"Vaikom Muhammed Basheer",
        img:"/public/images/basheer.jpg"
    }
]

app.set('view engine', 'ejs');
app.set('views',__dirname+'/src/views');
app.use(express.static(__dirname));

booksRouter.get('/', function(req,res){
    res.render("books",
    {
        nav:[{link:'/books', name: 'Books'},{link:'/authors', name:'Authors'}],
        title:'Library',
        books
    });
  
    
    
    
});
booksRouter.post('/', function(req,res){
    res.render("books",
    {
        nav:[{link:'/books', name: 'Books'},{link:'/authors', name:'Authors'}],
        title:'Library',
        books
    });
});

booksRouter.get('/:id', function(req, res){
    //res.send("i am a book");
    const id = req.params.id;
    res.render('book',{
        nav:[{link:'/books', name: 'Books'},{link:'/Authors', name:'Authors'}],
        title:'Library',
        book:books[id]
    });
});

authRouter.get('/',function(req,res){
    res.render("authors",{
        nav:[{link:'/books', name: 'Books'},{link:'/Authors', name:'Authors'}],
        title:'Authors',
        authors
    });
});

authRouter.get('/:id', function(req, res){
    //res.send("i am a book");
    const id = req.params.id;
    res.render('author',{
        nav:[{link:'/books', name: 'Books'},{link:'/Authors', name:'Authors'}],
        title:'Authors',
        author:authors[id]
    });
});



app.listen(port,()=> {console.log("Server ready at"+port)});