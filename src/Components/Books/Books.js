import React, {useState} from "react";
import Book from "./Book/Book";
import BookDetail from "./BookDetail/BookDetail";

const Books = (props) => {

  const [clicked, setClicked] = useState(false)

  const books = props.books.map((book, index) => (
      book.volumeInfo ?
          <Book key={index}
                url={book.volumeInfo.imageLinks?.thumbnail}
                categories={book.volumeInfo.categories}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                onClick={() => clickedHandler(index)}
          />
          : null
  ))

  const bookDetail = props.books.map((book, index) => {
        if (book.clicked) {
          return (
              book.volumeInfo ?
                  <BookDetail key={index}
                              url={book.volumeInfo.imageLinks?.thumbnail}
                              categories={book.volumeInfo.categories}
                              title={book.volumeInfo.title}
                              authors={book.volumeInfo.authors}
                              description={book.volumeInfo.description}
                              onClick={() => clickedHandler(index)}
                  />
                  : null
          )
        }
      }
  )

  function clickedHandler(index) {
    const click = !clicked
    setClicked(click)
    props.onClick(index)
  }

  return (
      <React.Fragment>
        {clicked ? bookDetail :
            <React.Fragment>
              <h3>Found {props.books?.length > 0 ? props.books[0].index : 0} results</h3>
              <div className={'Books-container'}>{books}</div>
              <button className={'loader_button'} onClick={props.loadMoreHandler}>Load more</button>
            </React.Fragment>}
      </React.Fragment>
  )

}
export default Books
