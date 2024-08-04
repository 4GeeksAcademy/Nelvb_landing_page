import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron mt-3 mb-5">
      <h1 className="display-4">Epic Fantasy Sagas</h1>
      <p className="lead text-justify">
        Below are some of the most famous sagas in fantasy literature, each of which has been successfully adapted to the screen.
      </p>
      <a className="btn btn-primary btn-lg" href="https://www.amazon.com/books-used-books-textbooks/b?ie=UTF8&node=283155" role="button" target="_blank" rel="noopener noreferrer">
        Buy Now!
      </a>
    </div>
  );
};

export default Jumbotron;
