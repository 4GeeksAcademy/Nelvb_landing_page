import React from 'react';
import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from './footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4 pt-5">
        <Jumbotron />
        <div className="row mt-5">
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="https://m.media-amazon.com/images/I/71VjmMcE-rL._AC_UF894,1000_QL80_.jpg"
              title="The Lord of the Rings"
              text="The epic fantasy trilogy by J.R.R. Tolkien that follows the journey to destroy the One Ring."
              buttonUrl="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
              title="Harry Potter"
              text="The series of fantasy novels by J.K. Rowling that chronicles the life of a young wizard, Harry Potter."
              buttonUrl="https://en.wikipedia.org/wiki/Harry_Potter"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg"
              title="A Song of Ice and Fire"
              text="The series of epic fantasy novels by George R. R. Martin, which inspired the TV show Game of Thrones."
              buttonUrl="https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZTz-9BKIvgpku7pj2h__0YiNO_9ovU5NNQE9cONJZ_SnA__uLLbOmXXfj4dUadfZyFLZkV2K5hWo6o8YdViB4hp3mrInucliy536Wn4IoVSohCg8qQl4DNQ&usqp=CAc"
              title="Dune"
              text="The science fiction novel by Frank Herbert, set in a distant future amidst a huge interstellar empire."
              buttonUrl="https://en.wikipedia.org/wiki/Dune_(novel)"
              buttonLabel="Find Out More!" 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
