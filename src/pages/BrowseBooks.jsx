// Browse Books page - shows books filtered by category with search functionality
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../data/books";

function BrowseBooks() {
  // Get category from URL params (e.g., /books/Fiction)
  const { category } = useParams();

  // Search input state
  const [search, setSearch] = useState("");

  // Get all books from Redux store
  const allBooks = useSelector((state) => state.books.booksList);

  // Filter books by category if category param exists
  const categoryFiltered = category
    ? allBooks.filter((book) => book.category === category)
    : allBooks;

  // Further filter by search (title or author)
  const filteredBooks = categoryFiltered.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse">
      <h1>Browse Books 📚</h1>

      {/* Category filter links */}
      <div className="category-filters">
        <Link
          to="/books"
          className={`filter-btn ${!category ? "active" : ""}`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={`filter-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Books grid */}
      <div className="books-grid">
        {filteredBooks.length === 0 ? (
          <p className="no-books">No books found! 😔</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover">📖</div>
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <p className="category-tag">{book.category}</p>
              <p className="rating">⭐ {book.rating}</p>
              {/* View Details link with dynamic route */}
              <Link
                to={`/books/${book.category}/${book.id}`}
                className="btn-details"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;