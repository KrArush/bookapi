const books = [{
    ISBN : "11126",
    name : "One Tails",
    author : "R.R.Singh",
    pubData : "22-12-2008",
    catagori : "Novel",
    publication : "N.O.S"
},
{
    ISBN : "11124",
    name : "The one Road",
    author : "T.R.Singh",
    pubData : "12-03-2020",
    catagori : "Novel",
    publication : "N.O.S"  
},
{
    ISBN : "11127",
    name : "The Boy Who Loved",
    author : "Durjoy Dutta",
    pubData : "04-12-2020",
    catagori : "Novel",
    publication : "Camline"  
},
{
    ISBN : "11128",
    name : "Tesla",
    author : "Elon Musk",
    pubData  : "14-04-2014",
    catagori : "Technology",
    publication : "The Space Tech."
},
{
    ISBN : "11129",
    name : "The Space",
    author : "Rajaram",
    pubData : "23-02-2013",
    catagori : "Space",
    publication : "The Space Tech."
}]

const author = [{
    id : "1",
    name : "Durjoy Dat",
    books : "The Boy Who Loved"
},
{
    id : "2",
    name : "T.R.Singh",
    books : "The one Girl"
},
{
    id : "3",
    name : "R.R.Singh",
    books : "One Tails"

},
{
    id : "4",
    name : "Elon Musk",
    books : "Tesla"
},
{
    id : "5",
    name : "Rajaram",
    books : "The Space"

}]

const publication = [{
    id : "10",
    name : "N.O.S",
    book : ["One Tails" , "The One Road"]
},
{
    id : "11",
    name : "Camline",
    book : "The Boy Who Loved"
},
{
    id : "12",
    name : "Tesla",
    book : "Tesla"
},
{
    id : "13",
    name : "The Space Tech.",
    book : "The Space"
}]
module.exports = [books, author, publication];