import React from 'react'
import { useParams } from 'react-router-dom'
import { bookinfo } from '../bookinfo';

export const SingleProduct = () => {
    var { productID } = useParams();
    var book = bookinfo.find((b) => {
        return b.id === parseInt(productID);
    })
    return (
        <div>
            <h3>{book.id}</h3>
            <h3>{book.title}</h3>
            <img src={book.imgpath} alt="not found" width="150px"></img>
            <h3>{book.author}</h3>
        </div>
    )
}
