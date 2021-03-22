import React from "react";

const Book = (props) => {
  if (!props.year) {
    return null;
  }

  return props.price ? (
    <div className={props.name} data-text="can use -">
      <h2>Book {props.name ? <span>{props.name}</span> : "Empty book"}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      {/* nice comment bruh */}
      <br />
      <p>{props.children}</p>
    </div>
  ) : null;
};

export { Book };
