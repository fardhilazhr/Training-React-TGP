import { useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useState(0);

  return (
    <>
      <Header />
      <div className="m-8">
        <BookList />
      </div>
      <Footer />
    </>
  );
}

export default App;
