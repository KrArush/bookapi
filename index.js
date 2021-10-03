const express = require("express")
const fs = require("fs");
const bodyparser = require("body-parser");
const { get } = require("http");
const [books , author, publication] = require("./bookapi");
const { allowedNodeEnvironmentFlags, off } = require("process");
const app = express()
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


// API FOR BOOKS 

/*
ROUTE        /
DISCRIPTION  GET ALL THE RECORDS FROM BOOK
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       GET
*/

app.get("/",(req,res)=>{
  res.json({book: books})
})
app.listen(8000,()=>{
    console.log("Connected");
})

/*
ROUTE        /book/new
DISCRIPTION  ADD NEW RECORDS IN BOOK
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       POST
*/

app.post("/book/new",(req,res)=>{
    const newBook = req.body
    books.push(newBook)
    res.json({Book: books})
})

/*
ROUTE        /book/delete
DISCRIPTION  DELETE RECORDS IN BOOK
ACCESS       PUBLIC
PARAMETER    isbn
METHOD       DELETE
*/

app.delete("/book/delete/:isbn",(req,res)=>{
    const delete_record = books.filter(
        (book) => book.ISBN !== req.params.isbn
    );
    res.json(delete_record)
})

/*
ROUTE        /book/delete/author
DISCRIPTION  DELETE AUTHOR 
ACCESS       PUBLIC
PARAMETER    /isbn/authorId
METHOD       DELETE
*/

app.delete(" /book/delete/author/:isbn/:authorID",(req,res)=>{
    books.forEach(
    (book) =>{
        if(book.ISBN === req.params.isbn){
            const new_author = book.author.filter(
                (eachauthor) => eachauthor !==parseInt(req.params.author.Id)
            );
            book.author = new_author;
            return;
        }
    }
    );
    author.forEach(eachauthor) => {
        if(eachauthor.id === parseInt(req.params.authorID)){
            const newbookList = eachauthor
        }
    }
})

/*
ROUTE        /is
DISCRIPTION  GET SOME SPECIFIC RECORD FROM BOOK
ACCESS       PUBLIC
PARAMETER    isbn
METHOD       GET
*/
app.get("/is/:isbn",(req,res)=>{
    const specific_data = books.filter(
        (book) =>  book.ISBN === req.params.isbn
    );
    if(specific_data.lenght === 0){
        res.json({error: `not found for ${req.params.isbn}`});
    }
    res.json({book: specific_data})
})


/*
ROUTE        /cat
DISCRIPTION  GET SOME CATAGORI RECORD FROM BOOK
ACCESS       PUBLIC
PARAMETER    catagori
METHOD       GET
*/

app.get("/cat/:catagori",(req,res)=>{
    const data_on_catagori = books.filter(
        (book) => book.catagori === req.params.catagori
    );
    if(data_on_catagori.length === 0){
        res.json("No Data Found")
    }
    res.json({book : data_on_catagori})
})

/*
ROUTE        /pub
DISCRIPTION  GET SOME SPECIFIC PUBLICATION FROM BOOK
ACCESS       PUBLIC
PARAMETER    publication
METHOD       GET
*/

app.get("/pub/:publication",(req,res)=>{
    const data_on_publication = books.filter(
        (book) => book.publication === req.params.publication
    );
    if(data_on_publication.length === 0){
        res.json("Data Not Found")
    }
    res.json({Publication : data_on_publication})
})


// API FOR AUTHORS

/*
ROUTE        /authors
DISCRIPTION  GET SOME ALL AUTHORS
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       GET
*/

app.get("/authors",(req,res)=>{
    res.json({Authors: author})
})


/*
ROUTE        /authors/new
DISCRIPTION  ADD NEW RECORDS IN AUTHOR      
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       POST
*/
app.post("/authors/new",(req,res)=>{
    const newAuthor = req.body
    author.push(newAuthor)
    res.json({Authors: author})
})



/*
ROUTE        /authors/spec
DISCRIPTION  GET SOME SOME SPECIFIC AUTHORS
ACCESS       PUBLIC
PARAMETER    name
METHOD       GET
*/

app.get("/authors/spec/:name",(req,res)=>{
    const specific_name = author.filter(
        (author) => author.name === req.params.name
    );
    if(specific_name.length === 0){
        res.json("Data Not Found")
    }
    res.json({Name: specific_name})
})

/*
ROUTE        /authors/written
DISCRIPTION  GET SOME SOME SPECIFIC AUTHORS BASED ON  BOOK
ACCESS       PUBLIC
PARAMETER    book
METHOD       GET
*/

app.get("/authors/written/:book",(req,res)=>{
    const get_author_on_book = author.filter(
        (written) => written.books === req.params.book
    );
    if(get_author_on_book.length === 0){
        res.json("Data Not Found")
    }
    res.json({Books: get_author_on_book})
})

/*
ROUTE        /author/delete
DISCRIPTION  DELETE AUTHOR 
ACCESS       PUBLIC
PARAMETER    Id
METHOD       DELETE
*/

app.delete("/author/delete/:Id",(req,res)=>{
    const delete_author = author.filter(
        (authors) => authors.id !== req.params.Id
    );
    res.json(delete_author);
})


// API FOR PUBLICATION 

/*
ROUTE        /publications
DISCRIPTION  GET ALL THE PUBLICATIONS
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       GET
*/

app.get("/publications",(req,res)=>{
    res.json({publication: publication})
})

/*
ROUTE        /publications/new
DISCRIPTION  ADD NEW RECORDS IN PUBLICATION
ACCESS       PUBLIC
PARAMETER    NONE
METHOD       POST
*/

app.post("/publications/new",(req,res)=>{
    const newPublication = req.body
    publication.push(newPublication)
    res.json({Publication: publication})
})

/*
ROUTE        /publications/spec
DISCRIPTION  GET SPECIFIC PUBLICATIONS
ACCESS       PUBLIC
PARAMETER    pub
METHOD       GET
*/

app.get("/publications/spec/:pub",(req,res)=>{
    const get_specific_publication = publication.filter(
        (publi) => publi.name === req.params.pub
    );
    if(get_specific_publication.length === 0){
        res.json("Data Not Found")
    }
    res.json({Publication : get_specific_publication})
})

/*
ROUTE        /publications/books
DISCRIPTION  GET SPECIFIC PUBLICATIONS BASED ON BOOK
ACCESS       PUBLIC
PARAMETER    book
METHOD       GET
*/

app.get("/publications/specbooks/:specbook",(req,res)=>{
    const get_specific_pub_on_book = publication.filter(
        (b) => b.book === req.params.specbook 
    );
    if(get_specific_pub_on_book.length === 0){
        res.json("Data Not Found")
    }
    res.json({Book: get_specific_pub_on_book})
})


/*
ROUTE        /publications/books/update
DISCRIPTION  UPDATE / ADD NEW PUBLICATIONS
ACCESS       PUBLIC
PARAMETER    isbn
METHOD       PUT
*/

app.put("/publications/books/update/:isbn",(req,res)=>{
    publication.forEach((pub)=>{
        if(pub.id === req.body.pubID){
           return pub.book.push(req.params.isbn);
        }
    })
    books.forEach((book)=>{
        if(book.ISBN === req.params.isbn){
            book.publication = req.body.pubID
        }
    })
    res.json({
        Book: books,
        Publication: publication,
        Status: "Successfully Updated"
    })
})
