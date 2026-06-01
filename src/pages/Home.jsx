// Home page - landing page with welcome message, categories and popular books
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../data/books";

function Home() {
  // Get books list from Redux store
  const books = useSelector((state) => state.books.booksList);

  // Show only first 4 books as popular books
  const popularBooks = books.slice(0, 4);

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero">
        <h1>Welcome to Online Library 📚</h1>
        <p>Discover your next favorite book from our collection!</p>
        <Link to="/books" className="btn-primary">Browse Books</Link>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Book Categories</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="category-card"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-section">
        <h2>Popular Books</h2>
        <div className="books-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover">📖</div>
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <p className="category-tag">{book.category}</p>
              <p className="rating">⭐ {book.rating}</p>
              <Link to={`/books/${book.category}/${book.id}`} className="btn-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;