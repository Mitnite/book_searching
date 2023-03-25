export function list(state = [], action) {

  switch (action.type) {
    case "LIST_SUCCESS":
      let books
        const index = {index: action.list.totalItems}
      if (state) {
        const new_list = [...state]
        books = [].concat(new_list, action.list.items)
      } else books = action.list.items
        books.unshift(index)
      return books;

    case "Search":
      let searchBook = action.list.items
      const index2 = {index: action.list.totalItems}
      searchBook.unshift(index2)
      return searchBook;

    case 'CLICKED':
      const book_clicked = [...state]
      book_clicked[action.payload].clicked = !book_clicked[action.payload].clicked
      return book_clicked

    default:
      return state
  }
}