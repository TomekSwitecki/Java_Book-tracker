import type { Book } from "../types/books";
import "../styles/bookItem.scss";
import BookCard from "./BookCard";

function BookList({ books, onBookDelete }: { books: Book[]; onBookDelete: (id: number) => void }) {
    return (
        <div className="section-card">
            <div className="section-header">
                <div className="section-header__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h2>Books</h2>
            </div>
            <div className="book-item__wrapper">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} onDelete={onBookDelete} />
                ))}
            </div>
        </div>
    );
}

export default BookList;
