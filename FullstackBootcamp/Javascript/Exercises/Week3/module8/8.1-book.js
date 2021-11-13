// Instructions
// 1. Create an object that represents a book. It should have 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that will return the following description from your book object:
// `The book <book name> was written by <author name> in the year <publishing yeary





// Product details
// Publication date  :  November 9, 2021
// Language  :  English
// File size  :  61535 KB
// Print length  :  432 pages


const bookDetails = {
    bookName        : 'Will' ,
    authorName      : 'Mark Manson' ,
    language        : 'English' , 
    publicationDate : 'November 9, 2021' ,
    bookLength      : '432 pages'
}
console.log(bookDetails);

const printDetails = (printDetails) => `The book "${bookDetails.bookName}" was written by ${bookDetails.authorName} in the year ${bookDetails.publicationDate}`;


console.log(printDetails(bookDetails));