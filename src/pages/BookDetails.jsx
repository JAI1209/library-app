// Book Details page - shows detailed information about a selected book
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  // Get book id from URL params (e.g., /books/Fiction/1)
  const { id } = useParams();

  // Get all books from Redux store
  const books = useSelector((state) => state.books.booksList);

  // Find the book with matching id
  const book = books.find((b) => b.id === parseInt(id));

  // If book not found
  if (!book) {
    return (
      <div className="not-found-book">
        <h2>Book not found! 😔</h2>
        <Link to="/books" className="btn-primary">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      {/* Book cover */}
      <div className="details-cover">📖</div>

      {/* Book information */}
      <div className="details-info">
        <h1>{book.title}</h1>
        <p className="details-author">✍️ Author: {book.author}</p>
        <p className="details-category">🏷️ Category: {book.category}</p>
        <p className="details-rating">⭐ Rating: {book.rating} / 5</p>
        <p className="details-description">{book.description}</p>

        {/* Back to Browse button */}
        <Link to="/books" className="btn-primary">
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;