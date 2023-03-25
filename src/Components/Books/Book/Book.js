import React from "react";
import './Book.css'

const Book = props => {
  return (
      <div className={'Book'} onClick={props.onClick}>
        <div >
          <img src={props.url} alt={'book'}/>
          <p className={'Categories'}>{props.categories}</p>
          <p className={'Title'}>{props.title}</p>
          <p className={'Authors'}>{props.authors}</p>
        </div>
      </div>
  )
}
export default Book
