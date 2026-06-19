import type { Book } from "../types/books";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="book-item__stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? "book-item__star--filled" : "book-item__star--empty"}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

function BookCard({ book, onDelete }: { book: Book; onDelete: (id: number) => void }) {
    return (
        <div className="book-item">
            <div className="book-item__thumbnail">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="book-item__main">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p className="book-item__isbn">ISBN: {book.isbn}</p>
            </div>

            <div className="book-item__details">
                <p className="book-item__pages"><span>Pages:</span> {book.pages}</p>
                <StarRating rating={book.rating} />
            </div>

            <button className="button button--remove" onClick={() => onDelete(book.id)} aria-label="Delete book">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="3 6 5 6 21 6" stroke="#e05353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="#e05353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 11v6M14 11v6" stroke="#e05353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="#e05353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default BookCard;
