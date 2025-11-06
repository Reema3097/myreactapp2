import React from 'react'
var title = 'Too Good To Be True';
var imgpath = "https://m.media-amazon.com/images/I/818vo2TWp+L._AC_UY327_FMwebp_QL65_.jpg";
var author = 'Prajakta Koli';
var sampleobj = { id: 100, name: "Reema", age: 27 }
var samplearr = [{ id: 100, name: "Reema", age: 27 }, { id: 101, name: "Prachi", age: 21 }]
export const BookList = () => {
  return (
    <div className='BookList'>
      {/* <Book1></Book1> */}
      <Book title="Too Good To Be True"
        imgpath="https://m.media-amazon.com/images/I/818vo2TWp+L._AC_UY327_FMwebp_QL65_.jpg"
        author="Prajakta Koli"
        genre="Romance"></Book>

      <Book title="Don't Believe Everything You Think"
        imgpath="https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg"
        author="Joseph Nguyen"
        genre="self improvement"></Book>


      <Book title="Attitude is Everything change your attitude change your life!"
        imgpath="https://m.media-amazon.com/images/I/61go3pwTLYL._AC_UY327_FMwebp_QL65_.jpg"
        author="self help book"></Book>

    </div>
  )
}
const Book = (props) => {
  var{title,imgpath,author,genre}=props; //object destructing
  return (
    <div className='book'>
      {/* <h2>{props.title}</h2>
      <img src={props.imgpath} alt="not found" width="200px" height="200px"></img>
      <h3>{props.author}</h3>
      <h3>{props.genre}</h3> */}

      <h2>{title}</h2>
      <img src={imgpath} alt='not found' width="200px" height="200px"></img>
      <h3>{author}</h3>
      <h3>{genre}</h3>
    </div>
  )
}


const Book1 = () => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgpath} alt="not Found" width="200px"></img>
      <h2>{author}</h2>
      <h2>{sampleobj.id},{sampleobj.name},{sampleobj.age}</h2>
      <h2>{samplearr[0].id}--{samplearr[0].name}--{samplearr[0].age}</h2>
      <h2>{samplearr[1].id}--{samplearr[1].name}--{samplearr[1].age}</h2>
    </div>
  )
}




