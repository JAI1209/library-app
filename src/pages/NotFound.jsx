// 404 Page - shown when user visits an undefined route
// Note: This page does NOT include the Navbar/Header component
import { useLocation, Link } from "react-router-dom";

function NotFound() {
  // Get the current invalid URL
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 😵</h1>
      <h2>Page Not Found!</h2>

      {/* Display the invalid route URL */}
      <p className="invalid-url">
        Invalid URL: <span>{location.pathname}</span>
      </p>

      {/* Link back to Home page */}
      <Link to="/" className="btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;