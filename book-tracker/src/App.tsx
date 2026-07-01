import { useState, useEffect } from 'react'
import BookList from './components/BookList';
//import { mockBooks } from './data/bookData';
import AddBookForm from './components/AddBookForm';
import type { Book, NewBook } from './types/books';
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  async function handleAddBook(book: NewBook) {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });


    const responseData = await response.json();

    const newBook: Book = {
      id: responseData.id,
      ...book,
    }
    setBooks((currentBooks) => [...currentBooks, newBook]);
    setSearch("");
  }






  async function handleBookDelete(id: number) {
    try {
      // `https://javabook-tracker-production.up.railway.app/books/${id}`
      await fetch(`${API_URL}/books/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }

    setBooks((currentBooks) =>
      currentBooks.filter((book) => book.id != id)
    )

  }

  const searchFilteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  })


  useEffect(() => {
    //"https://javabook-tracker-production.up.railway.app/books"
    fetch(`${API_URL}/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  console.log("API:", import.meta.env.VITE_API_URL);
  return (
    <div className='app-container'>
      <div className="app-header">
        <div className="app-header__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1>Book tracker</h1>
      </div>

      <AddBookForm onAddBook={handleAddBook} />

      <div className="section-card">
        <div className="section-header">
          <div className="section-header__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="#3B6FE0" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2>Search</h2>
        </div>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <BookList books={searchFilteredBooks} onBookDelete={handleBookDelete} />
    </div>
  )
}

export default App
