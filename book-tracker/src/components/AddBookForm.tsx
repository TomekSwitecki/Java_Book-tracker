import { useState } from "react";
import type { NewBook } from "../types/books";
import "../styles/form.scss";

function AddBookForm(props: { onAddBook: (book: NewBook) => void; }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [ISBN, setISBN] = useState("");
    const [pages, setPages] = useState("");
    const [rating, setRating] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!title.trim()) {
            alert("Title is required");
            return;
        }

        if (!author.trim()) {
            alert("Author is required");
            return;
        }

        if (!ISBN.trim()) {
            alert("ISBN is required");
            return;
        }

        if (Number(pages) < 1) {
            alert("Pages must be greater than 0");
            return;
        }

        if (Number(rating) < 1) {
            alert("Rating must be greater than 0");
            return;
        }

        props.onAddBook({
            title,
            author,
            isbn: ISBN,
            pages: Number(pages),
            rating: Number(rating),
        });

        setTitle("");
        setAuthor("");
        setISBN("");
        setPages("");
        setRating("");
    }

    return (
        <div className="section-card">
            <div className="section-header">
                <div className="section-header__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#3B6FE0" strokeWidth="2" />
                        <line x1="12" y1="8" x2="12" y2="16" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="8" y1="12" x2="16" y2="12" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <h2>Add Book</h2>
            </div>

            <form className="input-form" onSubmit={handleSubmit}>
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                <input placeholder="Pages" value={pages} type="number" onChange={(e) => setPages(e.target.value)} />
                <input placeholder="Rating (1–5)" value={rating} min="1" max="5" type="number" onChange={(e) => setRating(e.target.value)} />

                <button className="button" type="submit" style={{ marginTop: 4 }}>
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBookForm;
