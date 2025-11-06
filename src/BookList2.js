import React from 'react'
var bookinfo = [{
    title: "Ideas and Opinions",
    imgpath: "https://m.media-amazon.com/images/I/610jKE0mMlL._SY522_.jpg",
     author: " Albert Einstein", genre: "Biogrphy"},
{
    title: "Savitribai Phule",
    imgpath: "https://m.media-amazon.com/images/I/71Dtgi9VIlL._SY425_.jpg", author:"by G.A.Ugale"
    },
{
    title: "The World as I See It", imgpath: "https://m.media-amazon.com/images/I/81RViQwXYuL._SY522_.jpg",
     author: " Albert Einstein", genre: "Biografi"
    }
]
export const BookList2 = () => {
    return (
        <div className="booklist2">
            <Book2 title={bookinfo[0].title} imgpath={bookinfo[0].imgpath} author={bookinfo[0].author} genre={bookinfo[0].genre}></Book2>
            <Book2 title={bookinfo[1].title} imgpath={bookinfo[1].imgpath} author={bookinfo[1].author} genre={bookinfo[1].genre}></Book2>
            <Book2 title={bookinfo[2].title} imgpath={bookinfo[2].imgpath} author={bookinfo[2].author} genre={bookinfo[2].genre}></Book2>
        </div>

    )
}
const Book2 = (props) => {
  var{title,imgpath,author,genre}=props; //object destructing
  return (
    <div className='book2'>
         <h2>{title}</h2>
      <img src={imgpath} alt='not found' width="200px" height="200px"></img>
      <h3>{author}</h3>
      <h3>{genre}</h3>
    </div>
  )
}
