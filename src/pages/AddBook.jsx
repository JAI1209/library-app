// Add Book page - form to add a new book to the library
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";
import { categories } from "../data/books";

function AddBook() {
  // Redux dispatch and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
  });

  // Error state for form validation
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required!";
    if (!formData.author.trim()) newErrors.author = "Author is required!";
    if (!formData.description.trim()) newErrors.description = "Description is required!";
    if (!formData.category) newErrors.category = "Category is required!";
    if (!formData.rating) {
      newErrors.rating = "Rating is required!";
    } else if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5!";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create new book object
    const newBook = {
      id: Date.now(),
      title: formData.title.trim(),
      author: formData.author.trim(),
      description: formData.description.trim(),
      rating: parseFloat(formData.rating),
      category: formData.category,
    };

    // Dispatch addBook action to Redux store
    dispatch(addBook(newBook));

    // Redirect to Browse Books page
    navigate("/books");
  };

  return (
    <div className="add-book">
      <h1>Add New Book 📝</h1>

      <form className="add-book-form" onSubmit={handleSubmit}>
        {/* Title field */}
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        {/* Author field */}
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
          />
          {errors.author && <span className="error">{errors.author}</span>}
        </div>

        {/* Description field */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter book description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        {/* Category field */}
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        {/* Rating field */}
        <div className="form-group">
          <label>Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
          />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>

        {/* Submit button */}
        <button type="submit" className="btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;