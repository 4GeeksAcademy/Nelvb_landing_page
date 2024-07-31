import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card h-100 text-center">
      <img src={props.imageUrl} className="card-img-top" alt="Card image cap" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-justify">{props.text}</p>
        <a href={props.buttonUrl} className="btn btn-primary mt-auto">{props.buttonLabel}</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string
};

export default Card;
