import BookItem from "./BookItem";
import { books } from "../assets/data";
import React from "react";

const BookList: React.FC = () => {
  return (
    <div className="justify-items-center">
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => {
          return <BookItem key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
