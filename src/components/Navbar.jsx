// Navbar component - shown on all pages except 404
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* App logo/title */}
      <div className="navbar-brand">
        📚 Online Library
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/add">Add Book</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;