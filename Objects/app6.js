/*
Consider the same array of objects and find out the book(s) that is/are on the topic of entrepreneurship
*/

let books = [
    {
    name: "The Lean Startup",
    topics: ["entrepreneurship","startups"],
    },
    {
    name: "War and Peace",
    topics: ["peace", "politics"],
    }
];


    // for (let objectItem in books) {
    //     for (let i=0; i<books.length; i++){ 
    //             if (books[i][i+1] == "entrepreneurship"){

    //                     console.log(books.name);
    //             }

    //             else {
    //                     console.log("Books on the topic of entrepreneurship doesn't exist.");
                
    //             }
    //     }
    // }

    for (let i=0; i<books.length; i++){ 
        for(j=0; j<books.length; j++){ 
                if (books[i].topics[j] == "entrepreneurship"){

                        console.log("Book exists", books[i].topics[j]);
                }

                else {
                        console.log("Books on the topic of entrepreneurship doesn't exist.");
                
                }
            }
    }

