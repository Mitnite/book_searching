import React from "react";
import './Header.css'
import search from '../../img/search.svg'

const Header = props => {
  return (
      <div className={'Header'}>
        <div>
          <h1>Search for books</h1>
          <form onSubmit={props.onSubmit}>
            <input type="text" onChange={props.onChange}
                   placeholder='Search for Book'
                   autoComplete='off'
            />
            <button type='submit' className={'btn'}><img src={search} alt="search"/></button>
          </form>
          <div className={'Selector'}>
              Categories
              <select name="" onChange={props.onSelectSubject}>
                <option value="">All</option>
                <option value="Art">Art</option>
                <option value="Biography">Biography</option>
                <option value="Computers">Computers</option>
                <option value="History">History</option>
                <option value="Medical">Medical</option>
                <option value="Poetry">Poetry</option>
              </select>
            Sorting by
            <select name="" onChange={props.onSelectOrderBy} style={{width: 100}}>
              <option value="relevance ">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
          <button onClick={props.onSubmit} className={"add-sort-button"}>Add sorting </button>
        </div>
      </div>
  )
}
export default Header
