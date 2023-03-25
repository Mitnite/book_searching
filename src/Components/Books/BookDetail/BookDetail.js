import React from "react";
import './BookDetail.css'

const BookDetail = props => {
  return (
      <div className={'BookDetail'} onClick={props.onClick}>
        <div className={'BookDetail-img'}>
          <img src={props.url} alt={'book'}/>
        </div>
        <div className={'BookDetail-descr'}>
          <p className={'Categories'}>{props.categories}</p>
          <p className={'Title'}>{props.title}</p>
          <p className={'Authors'}>{props.authors}</p>
          <p className={'Description'}>{props.description}</p>
        </div>
      </div>
  )
}
export default BookDetail
