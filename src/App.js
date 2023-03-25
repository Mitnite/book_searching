import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import {connect} from 'react-redux'
import {listFetchData, listSearchData} from "./Components/Redux/actions/list";
import loader from './img/loader.gif'
import Books from "./Components/Books/Books";

const App = props => {

  const [startIndex, setStartIndex] = useState(0)
  const [book, setBook] = useState('a')
  const [orderBy, setOrderBy] = useState('relevance')
  const [subject, setSubject] = useState('')

  const [apiKey, setApiKey] = useState('AIzaSyD3f7SVXdId-RbT0q6NJU3IX1cYUkC-EyY')

  useEffect(() => {
    props.fetchData(url)
  }, [])


  const url = `https://www.googleapis.com/books/v1/volumes?q=${book}` + '+subject:' + subject + '&key=' + apiKey + '&maxResults=30&startIndex=' + startIndex + '&orderBy=' + orderBy


  function changeHandler(event) {
    const book = event.target.value
    setBook(book)
  }

  function submitHandler(event) {
    event.preventDefault();
    props.searchData(url)
  }

  function loadMoreHandler() {
    const Index = startIndex + 30
    setStartIndex(Index);
    props.fetchData(url)
  }

  function subjectHandler(event) {
    setSubject(event.target.value)
  }

  function orderByHandler(event) {
    setOrderBy(event.target.value)
  }

  return (
      <div className="App">
        <Header
            onSubmit={submitHandler}
            onChange={changeHandler}
            onSelectSubject={subjectHandler}
            onSelectOrderBy={orderByHandler}
        />



        {props.books?.length > 0 ?
            <Books books={props.books}
                   onClick={(index) => props.onClick(index)}
                   loadMoreHandler={loadMoreHandler}
            />
            : <img src={loader} alt="loader" className={'gif_loader'}/>
        }
      </div>

  );
}


function mapStateToProps(state) {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(listFetchData(url)),
    searchData: url => dispatch(listSearchData(url)),
    onClick: index => dispatch({type: 'CLICKED', payload: index}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

