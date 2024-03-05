import "./App.css";
import Header from "./components/Header";
import BookActions from "./components/books/BookActions";
import BookItem from "./components/books/BookItem";
function App() {
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Header></Header>
      <div className="my-10 lg:my-14">
        <BookActions></BookActions>
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <BookItem></BookItem>
        </div>
      </div>
    </div>
  );
}

export default App;
