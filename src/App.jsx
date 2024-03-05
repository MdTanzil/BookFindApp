import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookActions from "./components/books/BookActions";
import BookItem from "./components/books/BookItem";
import books from "./utils/data";
function App() {
  const [allBooks, setAllBooks] = useState(books);
  const handleSearch = (data) => {
    // console.log(data);
    const filterData = allBooks.filter((book) =>
      book.name.toLowerCase().includes(data.toLowerCase())
    );
    setAllBooks(filterData);
  };
  const handleSort = (option) => {
    let filterData = allBooks;
    if (option == "name_asc") {
      filterData = [...books].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (option == "name_desc") {
      filterData = [...books].sort((a, b) => b.name.localeCompare(a.name));
    }
    if (option == "year_asc") {
      filterData = [...books].sort((a, b) => a.publishYear - b.publishYear);
    }
    if (option == "year_desc") {
      filterData = [...books].sort((a, b) => b.publishYear - a.publishYear);
    }
    setAllBooks(filterData);
  };

  const handleFavorite = (data) => {
    const filterData = books.map((book) => {
      if (data.id == book.id) {
        data.isFavorite = !data.isFavorite;
        return data;
      }
      return book;
    });
    setAllBooks(filterData);
  };

  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Header></Header>
      <div className="my-10 lg:my-14">
        <BookActions
          onSearch={handleSearch}
          onSelect={handleSort}
        ></BookActions>
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allBooks.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              handleFavorite={handleFavorite}
            ></BookItem>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
