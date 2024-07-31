import React from 'react';
import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from './footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3 pt-5">
        <Jumbotron />
        <div className="row mt-5">
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 2"
              text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 3"
              text="Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
              buttonUrl="#"
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3 mb-4">
            <Card 
              imageUrl="http://placehold.it/500x325"
              title="Card title 4"
              text="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam ultricies nisi vel augue. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet."
              buttonUrl="#"
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
