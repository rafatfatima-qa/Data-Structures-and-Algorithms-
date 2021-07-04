/*
Take the above array of objects and add a book of your choice to it with the same properties.
*/

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }
];


function addItemAtStart() {

    //shift every item one place forward
    for (let i = books.length; i >= 0; i--) {

        books[i] = books[i - 1];
    }

    //add new book to 0 index
    books[books.length - books.length] = {
        name: "Rafat's Book at Start",
        topics: ["Topic-1", "Topic-2"],
    };

}

addItemAtStart();
console.log(books);

/* ********************************************************************************************* */

function addItemAtEnd() {

    books.length = books.length + 1;

    books[books.length - 1] = {
        name: "Rafat's Book at End",
        topics: ["Topic1: calculus", "Topic2: probability"]
    };

    console.log(books);

}

addItemAtEnd();