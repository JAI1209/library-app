// Main App component - sets up all routes for the application
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />

        <Route path="/books" element={
          <>
            <Navbar />
            <BrowseBooks />
          </>
        } />

        {/* Dynamic route - filter by category */}
        <Route path="/books/:category" element={
          <>
            <Navbar />
            <BrowseBooks />
          </>
        } />

        {/* Dynamic route - book details */}
        <Route path="/books/:category/:id" element={
          <>
            <Navbar />
            <BookDetails />
          </>
        } />

        <Route path="/add" element={
          <>
            <Navbar />
            <AddBook />
          </>
        } />

        {/* 404 route - NO Navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;