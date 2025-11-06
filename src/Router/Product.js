import React, { useState } from 'react'
import { bookinfo } from '../bookinfo'
import { Link } from 'react-router-dom';

export const Product = () => {
    var[books,setBooks]=useState(bookinfo);
  return (
    <div>
        {books.map((book)=>{
            // return <Singlebook book={book}/>
            return (
                <div>
                    <h3>{book.title}</h3>
                    <Link to={`/product/${book.id}`}>Click here for more info</Link>
                </div>
            )
        })}
    </div>
  )
}
// const Singlebook =({book})=>{
//     return (<div>
//         <h3>{book.id}</h3>
//         <h3>{book.title}</h3>
//         <img src={book.imgpath} alt="not found" width="150px"></img>
//         <h3>{book.author}</h3>
//     </div>)
// }
