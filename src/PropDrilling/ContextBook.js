import React, { createContext, useContext, useState } from 'react'
import { bookinfo } from '../bookinfo';


var BookContainer=createContext();
export const ContextBook = () => {

    var[books,setBooks]=useState(bookinfo);
    console.log(books);

    var removeBook=(id)=>{
    var remainingBooks=books.filter((book)=>{
        return book.id!=id;
    })
    setBooks(remainingBooks);
    }
  return (
    <div>
        <BookContainer.Provider value={{books,removeBook}}>
            <List></List>
        </BookContainer.Provider>
    </div>
  )
}
  const List=()=>{
    var{books}=useContext(BookContainer);
    return (<>
    {books.map((book)=>{
        return (
        <SingleBook book={book}/>)
    })}
    </>)
}
const SingleBook=({book})=>{
    var{removeBook}=useContext(BookContainer);
    return (<>
        <h3>{book.id}</h3>
        <h3>{book.title}</h3>
        <img src={book.imgpath} alt="not found" width="100px" height="100px"></img>
        <h3>{book.author}</h3>
        <button onClick={()=>{removeBook(book.id)}}>Remove Book</button>
    </>
    )
}

